import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

import { Heading, Container } from './../utils/components';
import media from "../utils/mediaQueries"
import Layout from "../layout/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WhoIm from "../components/whoIm"
import Shape1 from "../../static/header-shape1.png"
import Shape2 from "../../static/header-shape2.png"
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
  background-image: linear-gradient(transparent calc(65% - .25rem), hsla(216, 80%, 41%, 1) .25rem);
  background-size: 100%;
  background-position-y: -.35rem;
  background-repeat: no-repeat;
  display: inline;
  transition: 0.5s ease;
  ${props => media(props).lessThan("md")`
    font-size: 2rem;
    background-image: linear-gradient(transparent calc(75% - .25rem), hsla(216, 80%, 41%, 1) .25rem);
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
  display: flex;
  align-items: center;
  ${props => media(props).lessThan("md")`
    padding-bottom: 8rem;
  `}
`

const HeroImg = styled(Img)`
  position: absolute !important;
  transition: all 0.47s ease-in 0s;
  z-index: ${prop => prop.top ? 2 : 1};
  opacity: ${prop => prop.top ? prop.isZeusShown ? 1 : 0 : 1};
  border-radius: 50%;
  border: .25rem solid ${props => props.theme.lightTextColor};
`
const HeroImgWrapper = styled.div`
  position: relative;
  display: flex;
  width: 180px;
  height: 180px;
  margin-right: 2rem;
  ${props => media(props).lessThan("md")`
    width: 140px;
    height: 140px;
    margin-right: 1.5rem;
  `}
`

const HeroTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
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

const HeroText = ({ author }) => {
  return (
    <HeroTextWrapper>
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
    </HeroTextWrapper>
  );
}

const IndexPage = () => {
  const [isZeusShown, setIsZeusShown] = useState(false);

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
      us: file(relativePath: { eq: "us.jpeg" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      usMobile: file(relativePath: { eq: "us.jpeg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      zeus: file(relativePath: { eq: "zeus.jpeg" }) {
        childImageSharp {
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      zeusMobile: file(relativePath: { eq: "zeus.jpeg" }) {
        childImageSharp {
          fixed(width: 140, height: 140) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const {
    site: {
      siteMetadata: {
        social,
        author,
        description
      }
    }
  } = data;

  const zeusSources = [
    data.zeusMobile.childImageSharp.fixed,
    {
      ...data.zeus.childImageSharp.fixed,
      media: `(min-width: 769px)`,
    },
  ];
  const usSources = [
    data.usMobile.childImageSharp.fixed,
    {
      ...data.us.childImageSharp.fixed,
      media: `(min-width: 769px)`,
    },
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <IndexHero>
        <HeroContainer>
          <HeroImgWrapper
            onMouseEnter={() => setIsZeusShown(true)}
            onMouseLeave={() => setIsZeusShown(false)}>
            < HeroImg
              fixed={usSources}
            />
            < HeroImg
              top
              isZeusShown={isZeusShown}
              fixed={zeusSources}
            />
          </HeroImgWrapper>
          <HeroText author={author} />
        </HeroContainer>
      </IndexHero>
      <WhoIm social={social} />
    </Layout >
  );
}

export default IndexPage
