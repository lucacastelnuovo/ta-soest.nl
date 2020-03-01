module.exports = function(config) {

  // Layout aliases
  config.addLayoutAlias('default', 'layouts/base.njk');
  config.addLayoutAlias('publication', 'layouts/publication.njk');

  // Add utility filters
  const { DateTime } = require("luxon");
  config.addFilter("dateDisplay", (dateObj, format = "LLL d, y") => {
    return DateTime.fromJSDate(dateObj, {
        zone: "utc"
      }).toFormat(format);
  });


  // Collections
  config.addCollection('publication', collection => {
    return collection.getFilteredByTag('publication').reverse();
  })


  // compress and combine js files
  const UglifyJS = require("uglify-js")
  config.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log('UglifyJS error: ', minified.error);
          
          return code;
      }

      return minified.code;
  });

  // excerpt of my .eleventy.js config file
  const CleanCSS = require("clean-css");
  config.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // minify the html output
  const htmlmin = require("html-minifier");
  config.addTransform("htmlmin", (content, outputPath) => {
    if ( outputPath.endsWith(".html") )
    {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true
        })

        return minified;
    }

    return content;
  })


  // pass some assets right through
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/pdf');
  config.addPassthroughCopy('src/robots.txt');

  return {
    templateFormats : ['njk', 'md'],
    markdownTemplateEngine : 'njk',
    htmlTemplateEngine : 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'includes',
      data: 'data'
    },
  };
};
