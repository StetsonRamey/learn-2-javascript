/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: 'en', // for html tag
  title: 'How 2 Javascript',
  description: 'My writings on learning Javascript',
  // url: "https://mf-blogstarter.netlify.app", // don't end with a slash /
  brandName: 'SR', // for copyright and legal page

  author: {
    name: 'Stetson', // for posts meta and Open Graph meta (FB and Twitter)
    email: 'stetson.ramey@gmail.com', // used in legal page
    github: 'https://github.com/stetsonramey', // used in footer
    twitter: 'https://twitter.com/stetsonramey', // used in footer
  },

  github: {
    repo: 'https://github.com/StetsonRamey/learn-2-javascript',
  },

  meta_data: {
    theme_color: '#ffffff', // used in Chrome, Firefox OS and Opera
    default_social_image: '/assets/img/featured_image.png', // for Open Graph meta
    locale: 'en_US', // for Open Graph meta
    twitter_username: '@stetsonramey', // for Twitter Open Graph meta
  },
};
