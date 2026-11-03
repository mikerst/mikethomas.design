# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Mike Thomas (mikethomas.design), built with Eleventy 2 and deployed on Netlify.

## Commands

- `npm run dev`: Eleventy dev server at http://localhost:8080. Live reload is disabled in `.eleventy.js`, so refresh manually.
- `npm run build`: production build into `public/` (gitignored).

There are no tests, linters or formatters. Check changes by building and inspecting `public/`, e.g. `public/sitemap.xml` and the rendered HTML.

Netlify builds with Node 24 (`netlify.toml`). On macOS, Node comes from Homebrew (`/opt/homebrew/bin`).

## Architecture

**Content model.** All pages are Markdown with Nunjucks (`markdownTemplateEngine: njk`), so raw HTML and `{% %}` tags work inside `.md` files. Most page markup (figures, blockquotes, sections) is hand-written HTML inside the Markdown.

**Case studies (`src/work/`).** `src/work/work.json` applies `layouts/work.md` and the `work` tag to everything in the folder. Only pages tagged `recent` appear on the homepage (`collections.work | reverse | filterByTag("recent")` in `src/index.md`), and they're ordered by `date`. Front matter fields used by the templates:
- `title`, `intro` (also used for `og:description`)
- `hero` (filename in `src/_assets/img/`, used for the hero image, homepage thumbnail and `og:image`)
- `heroAlt` (optional; defaults to an empty alt)
- `type` (label above the title), `rt` (read time string)
- `company` (renders a copyright notice at the end)
- `date`, `tags`

**Unpublished content.** `src/journal/journal.json` and `src/work/archive/archive.json` set `permalink: false`, so those pages stay in the repo but aren't built. To republish one, override `permalink` in its front matter. Note that `eleventyExcludeFromCollections` alone only hides a page from listings; it is still built.

**Layout chain.** `layouts/base.njk` (aliased as `default`) includes `header.njk`, `meta.njk` (Open Graph tags) and `footer.njk`. `layoutClass` front matter becomes the `<main>` class (`home`, `about`, `work`), and the CSS uses it for per-page widths.

**Global data.** `src/_data/site.js` provides `site.rootUrl`, which the sitemap uses. `environment` (from `ELEVENTY_ENV`) is also global.

**JS.** No bundler. `src/_includes/js/*.js` are included into `base.njk` and inlined through the `jsmin` filter (Terser). `home.js` uses GSAP 2 (TweenMax from cdnjs) to animate any element with the `.stagger` class. The CSS sets `.stagger` to `opacity: 0`, so those elements only become visible once that script runs.

**CSS.** A single file, `src/_assets/css/styles.css`, copied through as-is (no PostCSS or minification) and using native CSS nesting. Design tokens are custom properties on `:root`. Fonts (Manrope, Inter, Libre Baskerville) come from Google Fonts. Dark-mode styles target `body.dark`, but nothing applies that class (templates set a `theme` attribute on `<html>` instead), so dark mode is currently inactive.

**Assets.** `src/_assets/{img,css,mov,files}` are copied through unprocessed (no image pipeline). Images are referenced by absolute path `/_assets/img/<name>`. Naming convention: `case-study__<year>__<project>--<detail>.jpg`. The CV PDF linked in `header.njk` lives in `src/_assets/files/` and is versioned by filename, so update the header link when adding a new CV.

**Dead code.** `password.njk` is no longer included anywhere (password protection was removed). The `protected` tag on some case studies is a leftover with no effect. Treat these as removable rather than as patterns to follow.

## Conventions

- Accessibility matters here (the portfolio includes an accessibility case study). Every content `<img>` needs meaningful `alt` text; when a figure has a `<figcaption>`, the alt describes the image rather than repeating the caption. Text colours must meet WCAG AA contrast.
- Work happens on year-named branches (e.g. `2027`); `master` is the main branch.
