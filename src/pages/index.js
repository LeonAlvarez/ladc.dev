import React from "react"
import { Link } from "gatsby"

import Layout from "../templates/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import WhoIm from "../components/whoIm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <WhoIm />
  </Layout>
)

export default IndexPage
