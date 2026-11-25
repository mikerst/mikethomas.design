# TODO

Recommendations from a code review in November 2026. They cover our own code only: templates, CSS, JS and config, not `node_modules`.

Goals: clean and minimal, modern and semantic, accessible, well structured, and good for search engines, agents and people.

The straightforward fixes were done in November 2026: accessibility and heading fixes, skip link, focus styles, titles, meta and canonical tags, robots.txt, favicon, manifest, semantic markup, removing Terser and `filterByTag`, CSS cleanup, filename case, and Netlify headers. What's left below either needs a decision or content from you, or is a larger piece of work.

---

## 1. Needs content or a decision

- [ ] **Add `heroAlt` to all four case studies.** None of them has it, so each hero image has an empty alt and `twitter:image:alt` is empty too. CLAUDE.md asks for meaningful alt text on content images.
- [ ] **Delete the 33 image files nothing references** (about 6.9 MB). They get copied into every deploy. They include `avatar.*`, `me.jpg`, `mike.jpg`, `mike-grid.png`, `default.png` and old `case-study__email__*`, `__fluid__`, `__launch-party__` and `__social__` files. Re-run the check before deleting: search all `src` templates, Markdown, CSS and JSON for each filename. Don't delete `favicon.ico` (it's copied to `/favicon.ico`), or `icon--sun.svg` and `icon--moon.svg` (kept for dark mode).
- [ ] **Decide what to do with unpublished content.** `src/journal/` and `src/work/archive/` aren't built. Since you're reworking the site to reflect your current career direction, either bring the useful ones up to date and publish them, or move them out of the repo. Then the archive-only CSS (`.project-tldr`, `video`, `figcaption`) and its images can go too.
- [ ] **Check the client logos are recognisable at `opacity: .35`** (`about.md`). They aren't text, so contrast rules don't strictly apply, but faint logos are harder to recognise.

## 2. Search engines and agents

- [ ] **Add structured data (JSON-LD).** Search engines and AI agents read this.
  - On the homepage and About, add a `Person` with name, job title, url, image, and `sameAs` pointing to LinkedIn.
  - On case studies, add an `Article` or `CreativeWork` with headline, description, image, author and `datePublished`.
- [ ] **Add `llms.txt`** at the root: a short Markdown summary of who you are and links to each case study with its intro. It's cheap to generate from `collections.work` and helps agents summarise your work accurately.
- [ ] **Add `<lastmod>` to the sitemap.** `page.date` is the publish date for case studies, but for pages without a `date` it's the file's creation time on disk, which isn't meaningful. Consider a `lastModified` front matter field, or the git commit date.
- [ ] **Give the CV a stable URL.** Add a Netlify redirect from `/cv` to the current PDF. Then the header link never has to change and old shared links keep working.

## 3. Structure and content

- [ ] **Wrap each case study in `<article>`** and show the date with `<time datetime="…">`, such as "2024" next to the read time. The CSS targets `main.work > *`, so the layout rules need updating along with the markup.
- [ ] **Give the animated GIF a pause control** (`from-zero-to-one-uk-energy.md`). It loops forever with no way to stop it, which fails WCAG 2.2.2 (Pause, Stop, Hide), and it ignores reduced-motion settings. Convert it to a muted MP4 or WebM `<video>` with controls, no autoplay and a poster frame.
- [ ] **Add "next case study" and "back to work" links** at the end of each case study, so readers who finish one have somewhere to go next.
- [ ] **Calculate read times automatically.** `rt` is written by hand, so it drifts when the content changes. A small filter could count the words in each page's content.
- [ ] **Consider an RSS or Atom feed** for case studies, using `@11ty/eleventy-plugin-rss`. Readers, aggregators and agents use feeds.

## 4. CSS

`src/_assets/css/styles.css`. Keep the dark-mode and theme-toggle code, as agreed. These changes affect how the site looks, so check each one in the browser.

- [ ] **Narrow the spacing rule.** `main * + *` adds top margin to every nested element, which is why `.timeline span`, `.clients li`, `.emphasis-text` and others need `margin: 0` overrides. Limit it to `main > * + *`, and add a `.flow` class where nested content needs the same spacing.
- [ ] **Use fluid type.** `clamp()` font sizes for `h1`, `h2` and `.project h2` would replace most of the 640px media query and the 1280px root font-size jump. Add `text-wrap: balance` to headings and `text-wrap: pretty` to paragraphs.
- [ ] **Request only the font weights you use.** The `<link>` in `base.njk` loads Inter's full 100–900 range with italics. Self-hosting the fonts is another option, and it avoids sending visitor data to Google.
- [ ] **When you finish dark mode**, base it on `prefers-color-scheme` with a `[data-theme]` override, instead of the unused `body.dark` class.

## 5. Tooling and hosting

- [ ] **Consider moving to an ESM `eleventy.config.js`**, which is the Eleventy 3 default.
- [ ] **Add a Content-Security-Policy** in `netlify.toml`. The other security headers are in place. A CSP needs to allow Google Fonts and the inline scripts in `base.njk`.
- [ ] **Add automated checks.** There are no tests, so problems can go unnoticed until someone spots them on the live site. Lightweight options:
  - HTML validation of `public/`, using `html-validate`.
  - A broken link check, using `linkinator` or `lychee`.
  - An accessibility scan, using `pa11y-ci` or `@axe-core/cli`, over the sitemap URLs.
  - An image check that fails the build if any `<img>` has no `alt` attribute.

  Run them from an `npm run check` script, and optionally in Netlify, for example with the Lighthouse build plugin.
- [ ] **Turn on Netlify branch deploys for the `2027` branch** so you can preview changes before merging to `master`.
- [ ] **Keep dependencies up to date** with Dependabot or Renovate on GitHub, plus a monthly `npm outdated` and `npm audit`.
- [ ] **Consider privacy-friendly analytics**, such as Netlify Analytics or Plausible, so content decisions are based on what visitors actually read.
