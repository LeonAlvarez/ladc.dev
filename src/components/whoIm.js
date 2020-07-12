import React from "react"
import styled from 'styled-components';
import { Github, Twitter, Telegram, Linkedin } from '@styled-icons/fa-brands'
import { AlternateEmail } from '@styled-icons/material';
import { Container, Heading, Button } from '../utils/components';

import media from "../utils/mediaQueries"
import Terminal from './terminal';

const WhoImWrapper = styled.section`
  display: flex;
  background-color: ${props => props.bgColor || props.theme.lightBgColor};
  color: ${props => props.textColor || props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 26rem;
  z-index: 10;
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
  top: -9rem;
  ${props => media(props).lessThan("md")`
    max-width: calc(100vw - 5rem);
    top: -8rem;
    left: -2rem;
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
  top: 1.75rem;
  height: 13rem;  
  justify-content: space-around;
`;

const ImBgtitle = styled.h2`
  color: ${props => props.bgColor || props.theme.bgColor};
  position: absolute;
  top: 6rem;
  right: 0;
  user-select: none;
  font-size: 10rem;
  opacity: .1;
  ${props => media(props).greaterThan("md")`
    font-size: 20rem;
    top: 8rem;
  `};
`;

const WhoImTitle = styled(Heading)`
  opacity: 0.75;
  color: red;
  ${props => media(props).lessThan("md")`
    font-size: 2.75rem;
    margin-bottom: .5rem;
  `};
`;

const HeadingQuestion = styled(Heading)`
  opacity: 0.75;
  ${props => media(props).lessThan("md")`
    font-size: 1.5rem;
  `};
`;

const TextWrapper = styled.div`
  position: relative;
  ${props => media(props).lessThan("md")`
    top: -4rem,
  `};
`;

const WhoIm = ({ social }) => {
  return (
    <WhoImWrapper>
      <WhoImContainer>
        <TextWrapper>
          <HeadingQuestion level={4}>Now you may be wondering...</HeadingQuestion>
          <WhoImTitle level={3}>Who Are You?</WhoImTitle>
          <Button primary rounded>
            About me
          </Button>
        </TextWrapper>
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
            <a href={`https://www.linkedin.com/in/${social.Linkedin}`} target="_blank">
              <Linkedin size="32" color="#0377b5" title="Linkedin" />
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