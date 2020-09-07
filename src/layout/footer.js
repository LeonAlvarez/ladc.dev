import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import { Github, Twitter, Telegram, Linkedin } from '@styled-icons/fa-brands'
import { AlternateEmail } from '@styled-icons/material';
import { Container, Button } from '../utils/components';
import { useSiteMetadata } from '../hooks/useSiteMetadata'

const FooterWrapper = styled.footer`
  color: hsla(208, 19%, 53%, 1);
  background-color: ${props => props.bgColor || props.theme.footer.bgColor};
  color: ${props => props.color || props.theme.footer.textColor};
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterCopyRight = styled.div`
  color: hsla(208, 19%, 53%, 1);
  a {
    &:hover{
      color: hsla(208, 89%, 73%, 1);
    }
  }
`;

const FooterSocial = styled.div`
  margin: 2rem auto;
`;

const SocialLink = styled.a`
  color: hsla(208, 19%, 53%, 1);
  margin: .5rem;
  transition: all 0.37s ease 0s;
  &:hover {
    color: hsla(208, 89%, 73%, 1);
    svg {
      transform: scale(1.15);
    }
  }
`;

const Footer = () => {
  const { social } = useSiteMetadata();

  return (
    <FooterWrapper>
      <Container>
        <FooterSocial>
          <SocialLink href={`https://github.com/${social.Github}`} target="_blank">
            <Github size="32" title="Github" />
          </SocialLink>
          <SocialLink href={`mailto:${social.Email}?subject=Hi`} target="_blank">
            <AlternateEmail size="32" title="Email" />
          </SocialLink>
          <SocialLink href={`https://twitter.com/${social.Twitter}`} target="_blank">
            <Twitter size="32" title="Twitter" />
          </SocialLink>
          <SocialLink href={`https://www.linkedin.com/in/${social.Linkedin}`} target="_blank">
            <Linkedin size="32" title="Linkedin" />
          </SocialLink>
          <SocialLink href={`https://t.me/${social.Telegram}`} target="_blank">
            <Telegram size="32" title="Telegram" />
          </SocialLink>
        </FooterSocial>
        <FooterCopyRight>
          © {new Date().getFullYear()}, Built with  {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </FooterCopyRight>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;