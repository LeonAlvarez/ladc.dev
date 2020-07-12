import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { Github, Twitter, Telegram } from '@styled-icons/fa-brands'
import { AlternateEmail } from '@styled-icons/material';
import { Container, Heading, Button } from '../utils/components';
import Terminal from './terminal';

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
`;

const WhoImTerminal = styled(Terminal)`
  top: -6rem;
`;

const ImBgtitle = styled.h2`
  color: ${props => props.bgColor || props.theme.bgColor};
  position: absolute;
  top: 2rem;
  right: 0;
  z-index: 0;
  font-size: 20rem;
  opacity: .1;
`;

const WhoImTextWrapper = styled.div`

`;

const WhoImTitle = styled(Heading)`
  opacity: 0.75;
  color: red;
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

const WhoIm = () => (
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
          <Github size="32" color="white" title="Github" />
          <AlternateEmail size="32" color="#d42c2c" title="Email" />
          <Twitter size="32" color="rgba(29,161,242,1.00)" title="Twitter" />
          <Telegram size="32" color="#179cde" title="Telegram" />
        </TerminalSocial>
      </WhoImTerminal>
      <ImBgtitle>LEÓN</ImBgtitle>
    </WhoImContainer>
  </WhoImWrapper>
)

export default WhoIm