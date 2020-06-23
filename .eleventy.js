const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  // OPT-OUT OF USING .gitignore to prevent reload issue when css change
  eleventyConfig.setUseGitIgnore(false);

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.liquid');

  // Date helpers
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('LLLL dd, yyyy');
  });
  eleventyConfig.addFilter('htmlDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc',
    }).toFormat('y-MM-dd');
  });

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy('src/assets');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'liquid', 'html', '11ty.js', 'md'],
    htmlTemplateEngine: 'liquid',
  };
};
