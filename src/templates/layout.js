/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../utils/ThemeContext';
import Header from "../components/header"
import "./layout.css"

const Layout = ({ children }) => {
  const theme = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query HeaderTitleQuery {
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
      <Header
        menuItems={menuItems}
        headerLogoTitle={data.site.siteMetadata.description}
        headerLogo={data.site.siteMetadata.author} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
          {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
