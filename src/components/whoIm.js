import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import { Github, Twitter, Telegram } from '@styled-icons/fa-brands'
import { AlternateEmail } from '@styled-icons/material';
import { Container, Heading, Button } from '../utils/components';

import media from "../utils/mediaQueries"
import Terminal, { TerminalBody } from './terminal';

const WhoImWrapper = styled.section`
  display: flex;
  background-color: ${props => props.bgColor || props.theme.lightBgColor};
  color: ${props => props.textColor || props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26rem;
  position: relative;
`;

const WhoImContainer = styled(Container)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column-reverse;
  ${props => media(props).greaterThan("md")`
    flex-direction: row;
  `};
`;

const WhoImTerminal = styled(Terminal)`
  top: -6rem;
  ${props => media(props).lessThan("md")`
    max-width: calc(100vw - 5rem);
    top: -1rem;
    left: -2rem;
    ${TerminalBody} {
      opacity: 1;
    }
    ${TerminalSocial} {
      right: -3rem;
    }
  `}
`;

const TerminalSocial = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -3rem;
  top: 1rem;
  height: 12rem;
  justify-content: space-around;
`;

const ImBgtitle = styled.h2`
  color: ${props => props.bgColor || props.theme.bgColor};
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 0;
  font-size: 10rem;
  opacity: .1;
  ${props => media(props).greaterThan("md")`
    font-size: 20rem;
    flex-direction: row;
  `};
`;

const WhoImTextWrapper = styled.div`

`;

const WhoImTitle = styled(Heading)`
  opacity: 0.75;
  color: red;
`;

const WhoIm = () => {
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
  const { social } = data.site.siteMetadata
  return (
    <WhoImWrapper>
      <WhoImContainer>
        <WhoImTextWrapper>
          <Heading level={4}>Now you may be wondering..</Heading>
          <WhoImTitle level={3} fontSize="4rem">Who Are You?</WhoImTitle>
          <Button primary rounded>
            About me
        </Button>
        </WhoImTextWrapper>
        <WhoImTerminal>
          <TerminalSocial>
            <a href={`https://github.com/${social.Github}`} target="_blank">
              <Github size="32" color="white" title="Github" />
            </a>
            <a href={`mailto:${social.Email}?subject=Hi`} target="_blank">
              <AlternateEmail size="32" color="#d42c2c" title="Email" />
            </a>
            <a href={`https://twitter.com/${social.Twitter}`} target="_blank">
              <Twitter size="32" color="rgba(29,161,242,1.00)" title="Twitter" />
            </a>
            <a href={`https://t.me/${social.Telegram}`} target="_blank">
              <Telegram size="32" color="#179cde" title="Telegram" />
            </a>
          </TerminalSocial>
        </WhoImTerminal>
        <ImBgtitle>LEÓN</ImBgtitle>
      </WhoImContainer>
    </WhoImWrapper >
  )
};

export default WhoIm