import React from 'react';
import Helmet from 'react-helmet';

import { colorScheme } from '../../helpers/styleSettings';
import { MarkdownRemarkNode } from '../../types';
import config from '../../../config/site-config';

interface SeoProps {
  post?: MarkdownRemarkNode;
}
const SEO = ({ post }: SeoProps) => {
  const { siteLinks } = config;

  let currentTitle;
  let currentDescription;
  let currentImage;
  let currentUrl;
  let pageTitle;

  if (post) {
    pageTitle = post.frontmatter.title;
    currentTitle = `${pageTitle} | ${config.siteName}`;
    currentDescription = post.excerpt;
    if (
      post.frontmatter.cover &&
      post.frontmatter.cover.childImageSharp.resolutions
    ) {
      currentImage = `${config.siteUrl}${
        post.frontmatter.cover.childImageSharp.resolutions.src
      }`;
    } else {
      currentImage = config.siteUrl + config.siteLogo;
    }
    currentUrl = `${config.siteUrl}${post.fields.slug}`;
  } else {
    currentDescription = config.siteDescription;
    currentTitle = config.siteTitle;
    currentUrl = config.siteUrl;
    currentImage = config.siteUrl + config.siteLogo;
  }
  return (
    <Helmet>
      <title>{currentTitle}</title>

      {/* standard meta stuff */}
      <meta name="description" content={currentDescription} />
      <meta name="image" content={currentImage} />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* opengraph metadata */}
      <meta property="og:locale" content={config.siteLanguage} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={config.siteName} />
      <meta property="og:image" content={currentImage} />
      <meta property="og:image:secure_url" content={currentImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:site" content={`@${siteLinks.Twitter.handle}`} />
      <meta name="twitter:image" content={currentImage} />

      {/* Icon Stuff */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${config.siteUrl}/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${config.siteUrl}/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${config.siteUrl}/favicons/favicon-16x16.png`}
      />
      <link
        rel="mask-icon"
        href={`${config.siteUrl}/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <link
        rel="shortcut icon"
        href={`${config.siteUrl}/favicons/favicon.ico`}
      />
      <meta
        name="msapplication-config"
        content={`${config.siteUrl}/favicons/browserconfig.xml`}
      />
      <meta name="theme-color" content={colorScheme.support} />
    </Helmet>
  );
};

export default SEO;
