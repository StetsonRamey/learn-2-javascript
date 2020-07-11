const { DateTime } = require('luxon');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (eleventyConfig) {
  // OPT-OUT OF USING .gitignore to prevent reload issue when css change
  eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

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

  // compress and combine js files
  eleventyConfig.addFilter('jsmin', require('./src/_utils/minify-js.js'));

  // minify the html output when running in prod
  if (process.env.ELEVENTY_ENV == 'production') {
    eleventyConfig.addTransform(
      'htmlmin',
      require('./src/_utils/minify-html.js'),
    );
  }

  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy('src/assets');

  // Get all the posts to display on the blog page
  eleventyConfig.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('./src/web/**/*.md');
  });

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
