module.exports = {
    siteMetadata: {
        title: 'Arden de Raaij - Front-end Developer',
    },
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/content/posts`,
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-emotion',
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
                            maxWidth: 960,
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
};
