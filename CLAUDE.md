# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site for Mike Thomas (mikethomas.design), built with Eleventy 3 and deployed on Netlify.

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

**Global data.** `src/_data/site.js` provides `site.rootUrl`, which the sitemap uses.

**JS.** No bundler. `src/_includes/js/*.js` are included into `base.njk` and inlined through the `jsmin` filter (Terser). `home.js` reveals `.stagger` elements on scroll with an IntersectionObserver that adds `.is-visible`; the fade itself is a CSS transition. An inline script in `<head>` adds a `js` class to `<html>`, and `.stagger` is only hidden under `.js`, so content stays visible without JS. Reduced-motion users get no animation.

**CSS.** A single file, `src/_assets/css/styles.css`, copied through as-is (no PostCSS or minification) and using native CSS nesting. Design tokens are custom properties on `:root`. Fonts (Manrope, Inter, Libre Baskerville) come from Google Fonts. Dark-mode styles target `body.dark`, but nothing applies that class (templates set a `theme` attribute on `<html>` from `theme:` front matter instead), and the `#theme-toggle` and `.icon--sun`/`.icon--moon` styles have no markup or SVG files. Dark mode is unfinished; the owner has chosen to keep this code for later, so don't remove it as dead code.

**Images.** Write plain `<img src="/_assets/img/<name>" alt="...">` in templates and Markdown. The Eleventy Image transform plugin (configured in `.eleventy.js`) rewrites every `<img>` in the built HTML into a `<picture>` with AVIF/WebP at 800 and 1600px wide, the original format as fallback, `loading="lazy"`, and `width`/`height`. Optimised files go to `public/img/` with hashed names. Attributes set on the `<img>` override the plugin defaults: the case study hero uses `loading="eager" fetchpriority="high"`, and homepage thumbnails set their own `sizes`. Add `eleventy:ignore` to skip an image (used for the animated GIF, which would lose its animation). A clean build takes about 10s locally because of AVIF encoding. In `npm run dev`, images are generated the first time they're requested, so the first view of a page can briefly show blank images.

**Assets.** `src/_assets/{img,css,mov,files}` are also copied through unprocessed (originals are still needed for `og:image` and the unpublished archive pages). Naming convention: `case-study__<year>__<project>--<detail>.jpg`. The CV PDF linked in `header.njk` lives in `src/_assets/files/` and is versioned by filename, so update the header link when adding a new CV.

**Archive-only styles.** Some CSS (`.project-tldr`, `video`, `figcaption`) is only used by the unpublished archive pages. Keep it so those pages render correctly if republished.

## Conventions

- Accessibility matters here (the portfolio includes an accessibility case study). Every content `<img>` needs meaningful `alt` text; when a figure has a `<figcaption>`, the alt describes the image rather than repeating the caption. Text colours must meet WCAG AA contrast.
- Work happens on year-named branches (e.g. `2027`); `master` is the main branch. Netlify deploys only pushes to `master`, so pushing a working branch doesn't publish anything or run a Netlify build.



