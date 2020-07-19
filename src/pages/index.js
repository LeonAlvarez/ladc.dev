import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import { Heading, Container } from './../utils/components';
import media from "../utils/mediaQueries"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WhoIm from "../components/whoIm"
import Shape1 from "../../static/yout-shape1.png"
import Shape2 from "../../static/yout-shape2.png"
import { Description } from "@styled-icons/material";

const HeroHeading = styled(Heading)`
  position: relative;
  color: ${props => props.textColor || props.theme.lightTextColor};
  font-family: "${({ theme }) => theme.fontFamilies.text}";
  font-weight: 400;
  z-index: 1;
  padding: 0 .25rem;
    margin: 0 -.25rem;
  font-size: 4rem;
  background-image: linear-gradient(transparent calc(65% - .25rem), hsla(208, 79%, 33%, 1) .25rem);
  background-size: 100%;
  background-position-y: -.35rem;
  background-repeat: no-repeat;
  display: inline;
  transition: 0.5s ease;
  ${props => media(props).lessThan("md")`
    font-size: 2rem;
  `}
`
const HeroHello = styled(Heading)`
  color: ${props => props.textColor || props.theme.lightTextColor};
  font-family: "${({ theme }) => theme.fontFamilies.text}";
  font-weight: 100;
  font-size: 4rem;
  ${props => media(props).lessThan("md")`
    font-size: 2rem;
  `}
`

const HeroContainer = styled(Container)`
  padding-bottom: 8rem; 
  ${props => media(props).lessThan("md")`
    padding-bottom: 8rem;
  `}
`

const IndexHero = styled(Hero)`
  position: relative;
  min-height: 70vh;
  &::before{
    content: " ";
    background: url(${Shape1});
    height: 240px;
    width: 350px;
    position: absolute;
    background-repeat: no-repeat;
    bottom: 0;
    left: 0;
    ${props => media(props).lessThan("md")`
      display: none;
    `}
  }
  &::after {
    content: " ";
    background: url(${Shape2});
    height: 260px;
    width: 400px;
    position: absolute;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    ${props => media(props).lessThan("md")`
      top: -65px;
      right: -100px;
      transform: scale(.5);
    `}
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          author
          description
          social {
            Github
            Twitter
            Telegram
            Email
            Linkedin
          }
        }
      }
    }
  `)
  const { social, author, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title="Home" />
      <IndexHero>
        <HeroContainer>
          <HeroHello level={1}>
            Hello!
          </HeroHello>
          <HeroHello level={1}>
            I'm {" "}
            <HeroHeading level={1} as="span">
              {author}
            </HeroHeading>
            {" "} a {" "}
            <HeroHeading level={1} as="span">
              Fullstack
            </HeroHeading>
            {" "} Developer.
          </HeroHello>
        </HeroContainer>
      </IndexHero>
      <WhoIm social={social} />
    </Layout >
  );
}

export default IndexPage
