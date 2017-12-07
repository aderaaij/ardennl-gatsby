import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import styled, { css } from 'react-emotion';
import 'normalize.css';
import mc from 'material-colors';
import config from '../../data/site-config';
import SiteHeader from '../components/SiteHeader/SiteHeader';
import Piwik from '../components/Piwik/Piwik';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'ff-tisa-web-pro', georgia, serif;
        background: ${mc.blueGrey[900]};
    }
    
    h1,h2,h3,h4,h5,h6 {
        font-family: 'proxima-nova', sans-serif;
        font-weight: 900;
        letter-spacing: -0.5px;
        color: ${mc.blueGrey[50]};
    }

    p {
        line-height: 1.55;
    }

    .gatsby-resp-image-wrapper {
        positiom: relative;
        width: 100vw;
        left: calc(-50vw + 50%);

        @media(min-width: 1200px) {
            width: 80vw;
            left: calc(-40vw + 50%);
        }
    }
`;


const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title={config.siteDescription}
        >
            <link rel="stylesheet" href="https://use.typekit.net/qru3ayc.css" />
        </Helmet>
        <Piwik />
        <SiteHeader />
        {children()}

    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
