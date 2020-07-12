const path = require('path');

module.exports = {
  siteMetadata: {
    title: `León Alvarez Del Canto | Fullstack Developer`,
    description: `León Alvarez Del Canto`,
    author: `León`,
    siteUrl: `https://ladc.dev`,
    social: {
      Github: `LeonAlvarez`,
      Twitter: `LeonAlvarez_`,
      Telegram: `leondesign`,
      Email: `leon@leon-design.es`,
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-catch-links',
    'gatsby-plugin-webpack-bundle-analyzer',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
          'gatsby-remark-external-links',
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://ca929e599e2143178bf8148538493560@o419144.ingest.sentry.io/5328680',
        enabled: (() => ["production", "stage"].includes(process.env.NODE_ENV))()
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: path.join(
          __dirname,
          'robots-txt.config.js'
        ),
      },
    },
    'gatsby-plugin-nprogress',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "León Alvarez Del Canto | Fullstack Developer",
        short_name: 'Ladc',
        start_url: '/',
        background_color: '#ededed',
        theme_color: '#384f7c',
        display: 'standalone',
        icons: [
          {
            src: '/favicons/192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline', // put this after gatsby-plugin-manifest
    'gatsby-plugin-netlify', // make sure to put last in the array
  ],
}
