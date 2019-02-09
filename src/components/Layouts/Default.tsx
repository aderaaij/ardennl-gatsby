import React from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';
import 'normalize.css';

const config = require('../../../data/site-config');
import SiteHeader from '../SiteHeader/SiteHeader';
import Piwik from '../Piwik/Piwik';
import Typekit from '../Typekit/Typekit';
import { globalCss } from '../../helpers/global';

const TemplateWrapper = ({ children }: any) => (
  <>
    <Global styles={globalCss} />
    <Helmet title={config.siteDescription} htmlAttributes={{ lang: 'EN' }} />
    <Piwik />
    <Typekit />
    <SiteHeader />
    {children}
  </>
);

export default TemplateWrapper;
