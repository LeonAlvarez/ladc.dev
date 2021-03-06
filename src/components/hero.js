import { Heading } from './../utils/components';
import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const HeroWrapper = styled.section`
  display: flex;
  min-height: 60vh;
  background-color: ${props => props.bgColor || props.theme.header.bgColor};
  color: ${props => props.textColor || props.theme.lightTextColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Hero = ({ className, children }) => (
  <HeroWrapper className={className}>
    {children}
  </HeroWrapper>
)

export default Hero