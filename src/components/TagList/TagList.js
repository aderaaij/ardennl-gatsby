import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';

const TagListWrap = styled.div`
    display: flex;

    span {
        margin-right: 1ch;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
    }   

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    li {
        &::after {
            content: ',';
            margin-right: 1ch;
        }

        &:last-child {
            &::after {
                content: '';
                margin: 0;
            }
        }
    }
`;

const TagList = props => (
    <TagListWrap>
        <span>Tagged:</span>
        <ul>
            {props.tags.map(tag => (
                <li key={tag}>
                    <Link to={`/tags/${tag}`}>
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    </TagListWrap>
);

export default TagList;

