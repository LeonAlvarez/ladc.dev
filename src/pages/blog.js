import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components";
import Img from "gatsby-image"

import { Container, Button, Heading } from '../utils/components';
import Layout from "../layout/layout"
import SEO from "../components/seo"
import media from "../utils/mediaQueries"


const BlogHeading = styled.div`
  color: ${props => props.textColor || props.theme.postList.textColor};
  margin:4rem 3rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogNotDogImgWrapper = styled.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  ${props => media(props).lessThan("md")`
    width: 60px;
    height: 60px;
    margin-right: 1.5rem;
  `}
`;

const DogNotDogImg = styled(Img)`
  position: absolute !important;
  transition: all 0.47s ease-in 0s;
  z-index: ${prop => prop.top ? 2 : 1};
  opacity: ${prop => prop.top ? prop.isZeusShown ? 1 : 0 : 1};
  border-radius: 50%;
  border: .15rem solid ${props => props.theme.lightTextColor};
`;




const PostListWrapper = styled.div`
  margin: 1rem 3rem;
`;

const Post = styled.article`
  margin-bottom: 2rem;
`;

const PostHeader = styled.article`
  margin-bottom: .5rem;
`;

const PostTitle = styled(Heading)`
  color: ${props => props.textColor || props.theme.postList.titleColor};
  font-size: 2rem;
  font-family: ${props => props.fontFamily || props.theme.fontFamilies.title};
  line-height: 1;
  margin-bottom: .25rem;
`;

const PostedAt = styled.span`
  color: ${props => props.textColor || props.theme.postList.textColor};
`;

const PostList = ({ posts }) => {
  return (
    <PostListWrapper>
      {
        posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Post key={node.fields.slug}>
              <PostHeader>
                <PostTitle level={4} as={'h3'}>
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </PostTitle>
                <PostedAt>{node.frontmatter.date}</PostedAt>
              </PostHeader>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.excerpt || node.frontmatter.description,
                  }}
                />
              </section>
            </Post>
          )
        })
      }
    </PostListWrapper>
  )
};

const BlogIndex = ({ data }) => {
  const [isZeusShown, setIsZeusShown] = useState(false);

  const { authorFullName, authorBasedIn } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

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
  ];

  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <BlogHeading>
          <DogNotDogImgWrapper
            onMouseEnter={() => setIsZeusShown(true)}
            onMouseLeave={() => setIsZeusShown(false)}>
            < DogNotDogImg
              fixed={usSources}
            />
            < DogNotDogImg
              top
              isZeusShown={isZeusShown}
              fixed={zeusSources}
            />
          </DogNotDogImgWrapper>
          <Heading level={5} as={'h1'} style={{ display: 'flex', flex: 1 }}>
            Written by {authorFullName} who lives and works {authorBasedIn} building useful things.
            Mainly writes about JS, React, Laravel, Programming, and Software Engineering.
          </Heading>
        </BlogHeading>
        <PostList posts={posts} />
      </Container>
    </Layout>
  );
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        authorFullName,
        authorBasedIn,
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    us: file(relativePath: { eq: "us.jpeg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    usMobile: file(relativePath: { eq: "us.jpeg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zeus: file(relativePath: { eq: "zeus.jpeg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    zeusMobile: file(relativePath: { eq: "zeus.jpeg" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`