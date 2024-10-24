module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("dateDisplay", require("./src/_assets/utils/date.js") );

  // Allows things like tag merging
  config.setDataDeepMerge(true);

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

  return {
    dir: {
      input: "src",
      output: "public",
      //includes: "",
      data: `data/${env}`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
