import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
    <h2>Pattern programming questions.</h2>
    <p>
      It is fun to learn programming by printing patterns. This project contains collection of different patterns and some solutions for printing them using javascript.
    </p>
    <p>
      For contributing, clone the repo at: <a href="https://github.com/howareyouami/patterns">github</a>
    </p>
  </div>
  </Layout>
)

export default IndexPage
