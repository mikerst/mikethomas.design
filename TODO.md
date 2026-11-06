# TODO

Recommendations from a code review in November 2026. They cover our own code only: templates, CSS, JS and config, not `node_modules`.

Goals: clean and minimal, modern and semantic, accessible, well structured, and good for search engines, agents and people.

Items are grouped by priority. Each says what to change, where, and why.

---

## 1. Fix first (bugs and accessibility)

- [ ] **Stop each homepage project card being announced twice** (`src/index.md`). Each card has two links to the same page: the thumbnail and the title. The thumbnail's alt text repeats the title, so screen readers hear the title twice and keyboard users tab through every card twice. Give the thumbnail `alt=""` and take its link out of the tab order with `tabindex="-1" aria-hidden="true"`. Alternatively, make the whole card one link.
- [ ] **Fix the heading levels on the homepage** (`src/index.md`). Project titles are `<h3>` under the `<h1>`, with no `<h2>` in between. Make them `<h2>`. The CSS already sizes `.project h3`, so rename that selector too.
- [ ] **Remove the `<div>`s inside the homepage `<h1>`** (`src/index.md`). A heading can only contain inline content, so this is invalid HTML. Use `<span>`s and keep the `display: block` in CSS.
- [ ] **Add a skip link** at the top of `base.njk`, such as `<a class="skip-link" href="#main">Skip to content</a>`, and give `<main>` an `id="main"`.
- [ ] **Add visible focus styles.** There are no `:focus-visible` rules, so keyboard users only get the browser default, which is faint on the grey nav links. Add a clear outline in `--accent-color`.
- [ ] **Remove `document.write` from the footer** (`footer.njk`). It's deprecated and needs JavaScript to show the year. Output the year at build time with a small global data value, such as `year: new Date().getFullYear()`. While you're there, check that "1982" is the start year you want.
- [ ] **Add `/favicon.ico` at the site root.** Browsers request it automatically and it currently returns 404. The file exists in `src/_assets/img/`, so copy it through to `/favicon.ico`.
- [ ] **Add `robots.txt`.** It currently returns 404. A minimal version allows everything and points to `https://mikethomas.design/sitemap.xml`. It's also where you'd decide whether to allow or block AI crawlers.

## 2. Search engines, social previews and agents

- [ ] **Give each page its own `<title>`** (`base.njk`). Use `{{ title }} – Mike Thomas`, and just "Mike Thomas – Product design lead" on the homepage. At the moment a case study's title has no name in it, and About's is only "About Mike".
- [ ] **Use each page's `intro` for its meta description** (`base.njk`). All pages currently share one hardcoded description. Use `{{ intro or site.description }}` and move the default into `src/_data/site.js`. Add an `intro` to `404.md`, which has none.
- [ ] **Add a canonical link**: `<link rel="canonical" href="{{ site.rootUrl }}{{ page.url }}">`.
- [ ] **Tidy up `meta.njk`.**
  - Build URLs from `site.rootUrl` instead of hardcoding the domain.
  - Use `og:type` `article` for case studies, plus `article:published_time` from `date`.
  - Fill `twitter:image:alt` from `heroAlt`. It's currently always empty.
  - Make sure every page has an `og:description`. The 404 page has none.
- [ ] **Add structured data (JSON-LD).** Search engines and AI agents read this.
  - On the homepage and About, add a `Person` with name, job title, url, image, and `sameAs` pointing to LinkedIn.
  - On case studies, add an `Article` or `CreativeWork` with headline, description, image, author and `datePublished`.
- [ ] **Add `llms.txt`** at the root: a short Markdown summary of who you are and links to each case study with its intro. It's cheap to generate from `collections.work` and helps agents summarise your work accurately.
- [ ] **Improve the sitemap** (`sitemap.njk`). Add `<lastmod>` from `page.date`. Swap the `if page.data.layout` check for an explicit exclusion, such as `eleventyExcludeFromSitemap`, so the intent is clear.
- [ ] **Fill in the web manifest** (`site.webmanifest`). `name` and `short_name` are empty, and `theme_color` (`#ffffff`) doesn't match the meta `theme-color` (`#010101`). Turning it into a small `.njk` template would let it read from `site.js`.
- [ ] **Use `lang="en-GB"`** instead of `en`, since the content uses British spelling.
- [ ] **Link to `/about/` with the trailing slash** in `header.njk`. That's the real URL, and the `aria-current` check already compares against `/about/`.

## 3. Semantic HTML

- [ ] **Turn the layout for case studies into a Nunjucks template.** Move `layouts/work.md` to `layouts/work.njk`. It's all HTML, so being Markdown only adds an extra rendering pass. Then remove `templateEngineOverride` from `work.json` and `work.md`. `markdownTemplateEngine: "njk"` already covers this.
- [ ] **Wrap each case study in `<article>`** and show the date with `<time datetime="…">`. The date is in front matter but never shown.
- [ ] **Mark up the homepage project list as a list.** Use `<ul>` with each project as `<li>` (or `<article>`) instead of nested `<div>`s.
- [ ] **Mark up testimonials as figures** (`about.md`): `<figure><blockquote>…</blockquote><figcaption>Name, role</figcaption></figure>`. `<cite>` is for the titles of works, not people. Drop `cite="…"` on the blockquotes, because it points to your own LinkedIn profile, not the source of each quote.
- [ ] **Use `<time>` for the years in the About timeline**, and add the missing space in the '07 entry.
- [ ] **Replace the invalid `theme` attribute** on `<html>` with `data-theme`. Update the CSS selectors when dark mode is finished.
- [ ] **Use separate `<p>` elements in the footer** instead of `<br/><br/>`.
- [ ] **Cut down `title` attributes and `target="_blank"`.**
  - Most `title` attributes repeat the link text, such as `title="Work"`. Screen readers may read them twice and they add no information, so remove them.
  - Opening links in a new tab is unexpected, especially for internal links. Keep it only for the CV PDF if you want, and say so in the link text, such as "CV (PDF)".

## 4. Clean, simple, minimal

- [ ] **Drop Terser and the `jsmin` filter.**
  - `terser@4` is from 2019 and its v5 API is async, so upgrading isn't a drop-in change.
  - There are about 20 lines of JS, so minifying gains almost nothing.
  - Inline `home.js` only on the homepage, the only page with `.stagger` elements.
  - Delete `core.js`. It's just a `console.info`.
- [ ] **Remove the `filterByTag` filter.** Eleventy already builds `collections.recent` from the `recent` tag, so `src/index.md` can loop over `collections.recent | reverse`.
- [ ] **Simplify `.eleventy.js`.**
  - Remove `templateFormats` (it includes `11ty.js`, which isn't used) and `setWatchThrottleWaitTime`.
  - Consider moving to an ESM `eleventy.config.js`, which is the Eleventy 3 default.
  - The four `_assets` passthrough copies could be one `addPassthroughCopy("src/_assets")`.
- [ ] **Fix `package.json`.**
  - Rename `name` to something lowercase, such as `mikethomas-design`, and add `"private": true`.
  - Replace `description` and `repository`, which still describe the old eleventyone starter.
  - Add `"engines": { "node": ">=24" }` to match Netlify.
- [ ] **Delete the 33 image files nothing references** (about 6.9 MB). They get copied into every deploy. They include `avatar.*`, `me.jpg`, `mike.jpg`, `mike-grid.png`, `default.png` and old `case-study__email__*`, `__fluid__`, `__launch-party__` and `__social__` files. Re-run the check before deleting: search all `src` templates, Markdown, CSS and JSON for each filename.
- [ ] **Make filenames lowercase.** CSS links to `icon--sun.svg` and `meta.njk` links to `opengraph.png`, but the files are `Icon--sun.svg` and `Opengraph.png`. It works on Netlify today, but it's fragile, and other hosts and local Linux builds are case-sensitive.
- [ ] **Give the CV a stable URL.** Add a Netlify redirect from `/cv` to the current PDF. Then the header link never has to change and old shared links keep working.
- [ ] **Update `README.md`**, which still says "Updates incoming soon" and has the typo "This site was design using". Also fix "dependecies" in `.gitignore`.

## 5. CSS

`src/_assets/css/styles.css`. Keep the dark-mode and theme-toggle code, as agreed. These changes are cleanup only.

- [ ] **Remove duplicate and dead rules.**
  - `img` is declared twice, and so are `body` and `ul` (`list-style: none`, then `disc`).
  - There's a stray `;;`.
  - `a:hover { border-bottom-color }` does nothing, because links use `text-decoration`.
  - `main > section { display: block }` is a browser default.
- [ ] **Group the repeated max-width rules.** `header`, `main > *` and `footer` all repeat `max-width` and auto margins. Combine them into one rule and use `margin-inline: auto`.
- [ ] **Narrow the spacing rule.** `main * + *` adds top margin to every nested element, which is why `.timeline span`, `.clients div`, `.emphasis-text` and others need `margin: 0` overrides. Limit it to `main > * + *`, and add a `.flow` class where nested content needs the same spacing.
- [ ] **Use fluid type.** `clamp()` font sizes for `h1`, `h2` and `.project h2` would replace most of the 640px media query and the 1280px root font-size jump. Add `text-wrap: balance` to headings and `text-wrap: pretty` to paragraphs.
- [ ] **Fix the table width.** Tables use `width: var(--max-width)`, which is 80rem inside a 40rem column, and only the column's `max-width` stops it overflowing. Use `width: 100%`. The `td` border is hardcoded `black`, so use a token.
- [ ] **Load fonts with a `<link>` in `<head>`** instead of `@import` in the CSS. The import chain delays text rendering. Add `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com`, and request only the weights you use. Inter's full 100–900 range with italics is heavier than needed. Self-hosting the fonts is another option, and it avoids sending visitor data to Google.
- [ ] **Move `-webkit-font-smoothing` from `*` to `body`.**
- [ ] **When you finish dark mode**, base it on `prefers-color-scheme` with a `[data-theme]` override, instead of the unused `body.dark` class.

## 6. Hosting (netlify.toml)

- [ ] **Cache the hashed images for a long time.** Add `Cache-Control: public, max-age=31536000, immutable` for `/img/*`. Those filenames change whenever the content does, so this is safe. Today everything is served with `max-age=0`.
- [ ] **Add basic security headers**: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`. Optionally add a simple Content-Security-Policy.

## 7. More ideas

Added after the main review. They're lower priority but worth considering.

### Content and accessibility

- [ ] **Add `heroAlt` to all four case studies.** None of them has it, so each hero image has an empty alt and `twitter:image:alt` is empty too. CLAUDE.md asks for meaningful alt text on content images.
- [ ] **Replace "here" as link text.** Three links only say "here" or "go here": `404.md`, `dso-profiles.md` ("You can see this live here") and `accessibility-audit-guidelines.md` ("can be seen live here"). Screen reader users often browse a list of links, where "here" means nothing. Link the descriptive words instead, such as "see the live operator profiles".
- [ ] **Give the animated GIF a pause control** (`from-zero-to-one-uk-energy.md`). It loops forever with no way to stop it, which fails WCAG 2.2.2 (Pause, Stop, Hide), and it ignores reduced-motion settings. Convert it to a muted MP4 or WebM `<video>` with controls, no autoplay and a poster frame. This also lets the image plugin handle the hero images consistently.
- [ ] **Shorten the client logo alt text and use a list** (`about.md`). Use the company name alone ("Piclo", not "Piclo Logo"), and mark up the grid as a `<ul>`. Also check the logos are recognisable at `opacity: .35`. They aren't text, so contrast rules don't strictly apply, but faint logos are harder to recognise.
- [ ] **Decide what to do with unpublished content.** `src/journal/` and `src/work/archive/` aren't built. Since you're reworking the site to reflect your current career direction, either bring the useful ones up to date and publish them, or move them out of the repo. Then the archive-only CSS (`.project-tldr`, `video`, `figcaption`) and its images can go too.

### Structure and navigation

- [ ] **Add "next case study" and "back to work" links** at the end of each case study, so readers who finish one have somewhere to go next.
- [ ] **Show the date on each case study**, such as "2024", next to the read time.
- [ ] **Calculate read times automatically.** `rt` is written by hand, so it drifts when the content changes. A small filter could count the words in each page's content.
- [ ] **Make the copyright notice an `<aside>` with a `<small>`** instead of a styled `<div>` (`layouts/work.md`).
- [ ] **Consider an RSS or Atom feed** for case studies, using `@11ty/eleventy-plugin-rss`. Readers, aggregators and agents use feeds.

### Quality checks

- [ ] **Add automated checks.** There are no tests, so problems can go unnoticed until someone spots them on the live site. Lightweight options:
  - HTML validation of `public/`, using `html-validate`.
  - A broken link check, using `linkinator` or `lychee`. It would have caught the old `#https://` GOV.UK link.
  - An accessibility scan, using `pa11y-ci` or `@axe-core/cli`, over the sitemap URLs.
  - An image check that fails the build if any `<img>` has no `alt` attribute.

  Run them from an `npm run check` script, and optionally in Netlify, for example with the Lighthouse build plugin.
- [ ] **Turn on Netlify branch deploys for the `2027` branch** so you can preview changes before merging to `master`.
- [ ] **Keep dependencies up to date** with Dependabot or Renovate on GitHub, plus a monthly `npm outdated` and `npm audit`.

### Housekeeping

- [ ] **Consider privacy-friendly analytics**, such as Netlify Analytics or Plausible, so content decisions are based on what visitors actually read.
- [ ] **Update CLAUDE.md** after doing any of the above. It documents the `jsmin` filter, `filterByTag`, `layouts/work.md` and the dark-mode leftovers, which will all change.
