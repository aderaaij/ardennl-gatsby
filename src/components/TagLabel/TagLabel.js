import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import mc from 'material-colors';

const Tag = styled.div`
    display: inline-block;
    background: ${mc.cyan[700]};
    border-radius: 4px;
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    padding: 0.25em 0.5em;
    font-family: 'proxima-nova',sans-serif;
    font-weight: 700;
`;

const TagLabel = props => (
    <Tag className={props.style}>
        {props.tagText}
    </Tag>
);

export default TagLabel;
