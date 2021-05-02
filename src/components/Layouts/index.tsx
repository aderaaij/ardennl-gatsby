import React from 'react';
import Helmet from 'react-helmet';
import { Global } from '@emotion/react';
import 'normalize.css';

import config from '../../../config/site-config';
import SiteHeader from 'src/components/SiteHeader';
import Piwik from 'src/components/Piwik';
import Typekit from 'src/components/Typekit';
import { globalCss } from 'src/helpers/global';

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
