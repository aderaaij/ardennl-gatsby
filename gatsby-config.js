module.exports = {
    siteMetadata: {
        title: 'Arden de Raaij - Front-end Developer',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/assets/img`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-prismjs',
                    'gatsby-remark-smartypants',
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1600,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
