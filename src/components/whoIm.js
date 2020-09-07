import React from "react"
import styled from 'styled-components';
import { Github, Twitter, Telegram, Linkedin } from '@styled-icons/fa-brands'
import { AlternateEmail } from '@styled-icons/material';
import { Container, Heading, Button } from '../utils/components';

import media from "../utils/mediaQueries"
import Terminal, { COMMANDS } from './terminal';

const WhoImWrapper = styled.section`
  display: flex;
  background-color: ${props => props.bgColor || props.theme.lightBgColor};
  color: ${props => props.textColor || props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32rem;
  z-index: 10;
  position: relative;
  ${props => media(props).lessThan("md")`
    padding-bottom: 3rem;
  `};
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
  top: -12rem;
  ${props => media(props).lessThan("md")`
    max-width: calc(100vw - 5rem);
    top: -8.25rem;
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

const SocialLink = styled.a`
  transition: all 0.37s ease 0s;
  &:hover {
    transform: translateX(0.5rem);
  }
`;

const ImBgtitle = styled.h2`
  color: ${props => props.bgColor || props.theme.bgColor};
  position: absolute;
  top: 8rem;
  right: 0;
  user-select: none;
  font-size: 10rem;
  opacity: .1;
  ${props => media(props).greaterThan("md")`
    font-size: 20rem;
    top: 3rem;
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


const initialHistory = [
  { ...COMMANDS().help({ command: 'help' }), at: new Date }
];

const WhoIm = ({ social }) => {
  return (
    <WhoImWrapper>
      <WhoImContainer>
        <TextWrapper>
          <HeadingQuestion level={4}>Now you may be wondering...</HeadingQuestion>
          <WhoImTitle level={3}>Who am I?</WhoImTitle>
          <Button primary rounded>
            About me
          </Button>
        </TextWrapper>
        <WhoImTerminal initialHistory={initialHistory} initalState="">
          <TerminalSocial>
            <SocialLink href={`https://github.com/${social.Github}`} target="_blank">
              <Github size="32" color="white" title="Github" />
            </SocialLink>
            <SocialLink href={`mailto:${social.Email}?subject=Hi`} target="_blank">
              <AlternateEmail size="32" color="#d42c2c" title="Email" />
            </SocialLink>
            <SocialLink href={`https://twitter.com/${social.Twitter}`} target="_blank">
              <Twitter size="32" color="rgba(29,161,242,1.00)" title="Twitter" />
            </SocialLink>
            <SocialLink href={`https://www.linkedin.com/in/${social.Linkedin}`} target="_blank">
              <Linkedin size="32" color="#0377b5" title="Linkedin" />
            </SocialLink>
            <SocialLink href={`https://t.me/${social.Telegram}`} target="_blank">
              <Telegram size="32" color="#179cde" title="Telegram" />
            </SocialLink>
          </TerminalSocial>
        </WhoImTerminal>
        <ImBgtitle>LEÓN</ImBgtitle>
      </WhoImContainer>
    </WhoImWrapper >
  )
};

export default WhoIm