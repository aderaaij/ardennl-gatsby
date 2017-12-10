import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colorScheme } from '../helpers/styleSettings';
import { GridBase, ContentLimit } from '../helpers/grid';

const NotFoundWrap = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${colorScheme.text};
    ${GridBase};

    h1 {
        font-size: 2em;
        margin: 0;
        color: ${colorScheme.support};
        @media(min-width: 768px) {
            font-size: 3em;            
        }
    }

    p {
        font-size: 1.25em;
        line-height: 1.55;
    }
`;

const NotFoundimage = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

const NotFoundContent = styled.div`
    ${ContentLimit};
`;

const NotFoundPage = ({ data }) => (
    <NotFoundWrap>
        <NotFoundimage src={data.imageSharp.sizes.tracedSVG} />
        <NotFoundContent>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </NotFoundContent>
    </NotFoundWrap>
);

NotFoundPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default NotFoundPage;

export const query = graphql`
query errorQuery {        
    imageSharp(id:{regex: "/404/"}) {
        sizes(
            maxWidth: 1600,
            traceSVG: {
                optTolerance: 0.1,
                turdSize: 0.1,
                alphaMax: 0.01,
                color: "#37474F",
                threshold: 170,
                blackOnWhite: false,
          }
        ) {
          tracedSVG
        }
      }
}
`;
