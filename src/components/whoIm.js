import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { Container, Heading } from '../utils/components';
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

const WhoImTitle = styled(Heading)`
  opacity: 0.75;
  color: red;
`;

const WhoIm = () => (
  <WhoImWrapper>
    <WhoImContainer>
      <Heading level={4}>Now you may be wondering..</Heading>
      <WhoImTitle level={3} fontSize="4rem">Who Are You?</WhoImTitle>
      <button>
        More about me
        </button>
      <WhoImTerminal />
      <ImBgtitle>LEÓN</ImBgtitle>
    </WhoImContainer>
  </WhoImWrapper>
)

export default WhoIm