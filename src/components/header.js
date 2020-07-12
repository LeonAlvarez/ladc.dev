import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import media from "../utils/mediaQueries"
import { Container } from '../utils/components';

const HeaderWrapper = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 40;
  top: 0;
  left: 0;
  right: 0; 
  height: 70px;
  background-color: ${props => props.theme.header.bgColor};
  transition:background-color ${props => props.theme.transition},box-shadow 0.3s;
  box-shadow: ${props => (props.isScrolled ? '0px 0px 10px #4d4d4d' : 'none')};
`;

const HeaderContainer = styled(Container)`
  justify-content: space-between;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const MainLink = styled(Link)`
  color: ${ props => props.theme.header.textColor};
  font-size: 1.5rem;
  font-weight: 200;
  text-decoration: none;
  ${props => media(props).greaterThan("md")`
    padding-left: 1rem;
  `};
  &:hover {
    -webkit-text-stroke: 1px ${ props => props.theme.header.textColor};
  }
`;

const HeaderLink = styled(Link)`
  color: ${ props => props.theme.header.textColor};
  text-decoration: none;
  text-transform: uppercase;
  border-bottom: 1rem;
  border-color: transparent;
  font-weight: 200;
  transition: all 0.2s ease-in-out;
  position: relative;
  padding: .5rem;
  ${props => media(props).greaterThan("md")`
    margin: 0 .5rem;
  `};
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 0px;
    height: 2px;
    transition: all 0.2s ease-in-out;
    transition-duration: 0.5s;
    opacity: 0;
    background: #3490dc;
  }
  &:before {
    left: calc(50% - 0.5rem);
  }
  &:after {
    right: calc(50% - 0.5rem);
  }
  &:hover {
    -webkit-text-stroke: 1px ${ props => props.theme.header.textColor};
    cursor: pointer;
      &:before,
      &:after {
      width: 50%;
      opacity: 1;
    }
  }
`;

const HeaderMenuList = styled.ul`
  display: flex;
`;

const HeaderMenu = ({ menuItems }) => {
  return (
    <nav>
      <HeaderMenuList>
        {menuItems.map((menuItem, i) => {
          return (
            <HeaderLink key={i} prefetch to="#">
              {menuItem}
            </HeaderLink>
          );
        })}
      </HeaderMenuList>
    </nav>
  );
}

const Header = ({ headerLogo, headerLogoTitle, menuItems }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <MainLink
        to="/"
        title={headerLogoTitle}
      >
        {headerLogo}
      </MainLink>
      <HeaderMenu menuItems={menuItems} />
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header