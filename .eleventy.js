// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(config) {
  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // // add support for syntax highlighting
  // config.addPlugin(syntaxHighlight);

  // // minify the html output
  // config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // // compress and combine js files
  // config.addFilter("jsmin", function(code) {
  //   const UglifyJS = require("uglify-js");
  //   let minified = UglifyJS.minify(code);
  //     if( minified.error ) {
  //         console.log("UglifyJS error: ", minified.error);
  //         return code;
  //     }
  //     return minified.code;
  // });


  // pass some assets right through
  config.addPassthroughCopy("./src/images");
  config.addPassthroughCopy("./src/pdf");

  return {
    dir: {
      input: "src",
      output: "dist",
      data: `_data`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
