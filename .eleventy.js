const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function(config) {

  // Optimise every <img> in the built HTML: AVIF/WebP at two widths, with the
  // original format as fallback, plus lazy loading and width/height to avoid
  // layout shift. Add `eleventy:ignore` to an <img> to skip it (e.g. GIFs).
  // Attributes set in the template (e.g. sizes, loading) win over these defaults.
  config.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "auto"],
    widths: [800, 1600],
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
        sizes: "(min-width: 1600px) 1440px, 100vw",
      },
    },
  });

  config.setServerOptions({
    liveReload: false,
  });

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Pass assets through unprocessed. The originals are still needed for
  // og:image and the unpublished archive pages.
  config.addPassthroughCopy("src/_assets");
  config.addPassthroughCopy("src/robots.txt");
  config.addPassthroughCopy({ "src/_assets/img/favicon.ico": "favicon.ico" });

  return {
    dir: {
      input: "src",
      output: "public"
    },
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
