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

const HeroHeading = styled(Heading)`
  color: ${props => props.textColor || props.theme.lightTextColor};
  font-family: "${({ theme }) => theme.fontFamilies.text}";
  font-weight: 400;
  font-size: 3rem;
  ${props => media(props).lessThan("md")`
    font-size: 2rem;
  `}
`
const HeroHello = styled(Heading)`
  color: ${props => props.textColor || props.theme.lightTextColor};
  font-family: "${({ theme }) => theme.fontFamilies.text}";
  font-weight: 100;
  font-size: 3rem;
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
    }`
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
  const { social, description } = data.site.siteMetadata;

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
              {description}
            </HeroHeading>
          </HeroHello>
          <HeroHello level={1}>
            a
            <HeroHeading level={1} as="span">
              {` fullstack `}
            </HeroHeading>
            developer.
          </HeroHello>
        </HeroContainer>
      </IndexHero>
      <WhoIm social={social} />
    </Layout >
  );
}

export default IndexPage
