module.exports = {
  plugins: [
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blog`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
  ],
  siteMetadata: {
    siteUrl: 'localhost:8000',
    siteName: 'Test site',
  }
};
