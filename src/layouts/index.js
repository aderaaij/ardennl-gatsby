import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';

import 'normalize.css';
import mc from 'material-colors';

import SiteHeader from '../components/SiteHeader/SiteHeader';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'ff-tisa-web-pro', georgia, serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'proxima-nova', sans-serif;
        font-weight: 900;
        letter-spacing: -0.5px;
        color: ${mc.cyan[700]};
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
            title="Arden de Raaij - Webdeveloper based in Lisbon, Portugal"
            meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
            ]}
        >
            <link rel="canonical" href="https://arden.nl" />
            <link rel="stylesheet" href="https://use.typekit.net/qru3ayc.css" />
            <script type="text/javascript">{`
                var _paq = _paq || [];
                /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                _paq.push(['trackPageView']);
                _paq.push(['enableLinkTracking']);
                (function() {
                var u="//analytics.arden.nl/";
                _paq.push(['setTrackerUrl', u+'piwik.php']);
                _paq.push(['setSiteId', '1']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
                })();
                // End Piwik Code                
            `}
            </script>
        </Helmet>
        <SiteHeader />
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
