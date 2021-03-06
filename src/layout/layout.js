/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../utils/ThemeContext'
import Header from "./header"
import Footer from "./footer"
import { useSiteMetadata } from '../hooks/useSiteMetadata'

import "./reset.css"

const LayoutWrapper = styled.div`
  background-color: ${props => props.bgColor || props.theme.lightBgColor};
  min-height: 100vh;
  margin: 0px;
  transition: all 0.37s ease 0s;
`;

const MainContainer = styled.main`
  margin-top: 4.5rem;
  height: 100%;
  min-height: calc(100vh - 12rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
  const { author, description } = useSiteMetadata();

  const menuItems = [
    { label: "Blog", url: '/blog' },
    { label: "About" },
    { label: "Contact" }
  ];

  return (
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <Header
          menuItems={menuItems}
          headerLogoTitle={description}
          headerLogo={author} />
        <MainContainer >{children}</MainContainer>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
