import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import 'normalize.css';
import config from '../../../data/site-config';
import SiteHeader from '../SiteHeader/SiteHeader';
import Piwik from '../Piwik/Piwik';
import Typekit from '../Typekit/Typekit';
import { colorScheme, fontScheme } from '../../helpers/styleSettings';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${fontScheme.text};
    background: ${colorScheme.dark};
  }
  
  h1,h2,h3,h4,h5,h6 {
    font-family: ${fontScheme.headings};
    font-weight: 900;
    letter-spacing: -0.5px;
    color: ${colorScheme.text};
  }

  a {
    color: ${colorScheme.support};
  }

  p {
      line-height: 1.55;
  }
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={config.siteDescription} htmlAttributes={{ lang: 'EN' }} />
    <Piwik />
    <Typekit />
    <SiteHeader />
    {children}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.object.isRequired
};

export default TemplateWrapper;
