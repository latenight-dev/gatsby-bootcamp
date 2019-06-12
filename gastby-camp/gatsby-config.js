module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'ErickTheDev',
    author: 'Erickendy Jean Pierre',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '3oo6fl15mq2k',
        accessToken: 'iMca9a42Voaz9tXHa6aFJMEeHsMZN208hcHiWSfFvaE',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              LinkImageesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
};
