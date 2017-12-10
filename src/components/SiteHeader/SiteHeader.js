import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import Headroom from 'react-headroom';
import { colorScheme, fontScheme } from '../../helpers/styleSettings';

const Header = styled.header`
    width: 100%;
    height: 60px;
    z-index: 901;
    display: flex;
    align-items: center;    
    margin: 0 auto;
    padding: 0 1em;    
    transition: transform 0.4s ease;
    transform: translateY(0);

    @media (min-width: 768px) {
        padding: 0 2em;
    }
`;

const headroomStyles = css`
    width: 100%;
    
    .headroom {
        transition: all 0.3s ease;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top,transparent 0,rgba(0,0,0,0.5) 100%);
            z-index: -1;
            transition: all 0.3s ease;
            opacity: 0;
        }
        background: transparent;

        &--unpinned {
            transform: translateY(-100%);
            background: transparent;
            &::before {
                opacity: 0;
            }
        }

        &--scrolled {
            &.headroom--pinned {
                background: ${colorScheme.support};
                &::before {
                    opacity: 0;
                }
            }

            a {
                color: ${colorScheme.text};
            }
        }
    }
`;

const SiteNav = styled.nav`
    font-family: ${fontScheme.headings};
    font-weight: 700;
    letter-spacing: -0.5px;
    text-transform: uppercase;
    font-size: 1.125em;
    margin-left: auto;

    & ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;

const Logo = styled(Link)`
    width: 130px;
    display: block;
    height: auto;
    fill: ${colorScheme.logo};

    & svg {
        display: block;
        width: 100%;
    }
`;

const navItem = css`
    text-decoration: none;
    color: ${colorScheme.text};
    transition: color 0.3s ease-out;

    &:hover {
        color: ${colorScheme.support};
    }
`;

const activeNavItem = css`
    color: ${colorScheme.support};
`;


export default class SiteHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        // const headroom = new Headroom(document.querySelector('header'));
        // headroom.init();
    }

    render() {
        return (
            <Headroom pinStart={0} wrapperStyle={{ position: 'fixed', zIndex: 501 }} className={headroomStyles}>
                <Header>
                    <Logo to="/" title="Home - Arden.nl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360.1 91.3" width="200">
                            <path id="i0" className="st0" d="M159.8 50c.1 18.4-6.1 20.9-9.6 22.1-7.8 2.7-11.9-8.1-11.9-8.2-3.2-7.2-7.5-12.2-12-15.7 14.6-8.7 17.1-24.2 17.1-38.2V1.2l-62.6.1-.1 52c-.1 6.9-.6 19.4-9.7 19.4-2.7 0-7 0-7-12.9l.1-59H49.8C17.8.8 1.5 16.9 1.5 48.7v35.4H16V48.7c0-23.6 9.7-33.3 33.6-33.4v26H24.1v14.5h25.5v3.9c0 20.2 10.1 27.4 21.5 27.4 17.2 0 23.5-16.1 24.2-31.9V40.6l.1-24.9h33.4c-1 14.7-6.7 23-26.4 24.7V55c.7-.1 2.2 0 2.2 0 .1 0 13.8-.5 20.6 14.7 3.4 7.7 11.1 17.3 22.6 17.3 2.3 0 3.7-.4 6.2-1.2 13.3-4.5 20.2-16.2 20.4-34.5v-1.4-.6l.1-33.9h35.7v20.5c0 24-10.1 34.3-33.8 34.3v14.5c31.6 0 48.3-16.9 48.3-48.7V.8L160 .9l-.2 49.1z" />
                            <path id="i1" className="st0" d="M345 2.5h-.2c-13.6 0-25.1 6.5-33.4 16.2V1.5h-14.5v59.6c-3-.9-6.5-1.1-11.1-.1-6.8 1.5-12.3 4.9-19.6 8.8-16.2 8.8-20.1 5.4-22.2 3.3-3-3-4.2-7.1-3.3-11.2 1.1-4.9 4.8-8.9 10.3-11 6.9-2.6 12.9-3 25.1-3 .7 0 1.3.1 2 .1h.2V33.6h-.2c-11.9 0-24.1-6.7-27.6-18.2h32.4V.9h-48s.1 7.2.1 7.6c0 11.2 4.9 21.2 12.8 28.4-.6.2-1.3.4-1.9.6-10 3.8-17.2 11.7-19.3 21.3-1.9 8.8.7 18 7.1 24.4 3.8 3.8 9.3 7.2 16.8 7.2 6.3 0 14.1-2.3 23.5-8.7 4.8-3.2 9.5-5.6 13-6.5 2.9-.8 6.1-.1 7.5 1.2.8.7 1.8 2 2.2 5.8v3.4h14.5v-.5V58c0-16.7 11.8-40.9 33.1-41.1l.1 68.3h13.9l.1-82.8c.1.1-5.8 0-13.4.1z" />
                        </svg>
                    </Logo>
                    <SiteNav>
                        <ul>
                            <li>
                                <Link className={navItem} activeClassName={activeNavItem} to="/posts/">Blog</Link>
                            </li>
                        </ul>
                    </SiteNav>
                </Header>
            </Headroom>
        );
    }
}
