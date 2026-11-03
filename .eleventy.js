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

  config.setWatchThrottleWaitTime(100);

  // Filter by tag
  config.addFilter("filterByTag", function(posts, tag) {
    return posts.filter(post => post.data.tags && post.data.tags.includes(tag));
  });


  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const Terser = require("terser");
    let minified = Terser.minify(code);
    if( minified.error ) {
        console.log("Terser error: ", minified.error);
        return code;
    }
    return minified.code;
  });

  // pass some assets right through
  config.addPassthroughCopy("./src/_assets/img");
  config.addPassthroughCopy("./src/_assets/css");
  config.addPassthroughCopy("./src/_assets/mov");
  config.addPassthroughCopy("./src/_assets/files");
  config.addPassthroughCopy("./src/site.webmanifest");

  return {
    dir: {
      input: "src",
      output: "public"
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
