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

  /* Markdown */
  let markdownIt = require('markdown-it');
  let markdownItAnchor = require('markdown-it-anchor');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let linkSymbol = `
    <svg aria-hidden="true" focusable="false" height="24" version="1.1" viewBox="0 0 16 16" width="24" class="inline-block ml-2 hover:border-b border-demoBorder fill-current text-transparent hover:text-gray-600">
    <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
    </svg>`;
  let opts = {
    permalink: true,
    permalinkClass: 'direct-link',
    permalinkSymbol: linkSymbol,
    level: [1, 2, 3, 4],
  };

  eleventyConfig.setLibrary(
    'md',
    markdownIt(options).use(markdownItAnchor, opts),
  );

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'liquid', 'html', '11ty.js', 'md'],
    htmlTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
  };
};
