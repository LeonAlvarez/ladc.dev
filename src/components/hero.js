import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import { Container } from '../utils/components';

const HeroWrapper = styled.section`
  display: flex;
  min-height: 60vh;
  padding-top: 70px;
  background-color: ${props => props.bgColor || props.theme.header.bgColor};
  color: ${props => props.textColor || props.theme.lightTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hero = ({ className }) => (
  <HeroWrapper className={className}>
    <HeroContainer>
      TODO
    </HeroContainer>
  </HeroWrapper>
)

export default Hero