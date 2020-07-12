import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import { Heading, Container } from './../utils/components';
import media from "../utils/mediaQueries"
import Layout from "../templates/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WhoIm from "../components/whoIm"

const HeroHeading = styled(Heading)`
  color: ${props => props.textColor || props.theme.lightTextColor};
`

const HeroContainer = styled(Container)`
  ${props => media(props).lessThan("md")`
    padding-bottom: 10rem;
  `}
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author,
          description
          social {
            Github
            Twitter
            Telegram
            Email
          }
        }
      }
    }
  `)
  const { social, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <HeroContainer>
          <HeroHeading level={1}>
            {`I'm ${description}, a fullstack developer.`}
          </HeroHeading>
        </HeroContainer>
      </Hero>
      <WhoIm social={social} />
    </Layout>
  );
}

export default IndexPage
