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

import "./layout.css"

const LayoutWrapper = styled.div`
  min-height: 100vh;
  margin: 0px;
  transition: all 0.37s ease 0s;
`

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author,
          description
        }
      }
    }
  `)
  const menuItems = ["Blog", "About", "Contact"];

  return (
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <Header
          menuItems={menuItems}
          headerLogoTitle={data.site.siteMetadata.description}
          headerLogo={data.site.siteMetadata.author} />
        <main style={{ overflow: 'hidden' }}>{children}</main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider >
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout