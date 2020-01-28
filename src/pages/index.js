import React from "react"
import { Link } from "gatsby"
import Contributing from "../components/Contributing"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div style={{ width: "250px" }}>
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * * * * * * * * * * *
        * * * * * * * * * * *
    </div>
      <h2>Pattern programming questions.</h2>
      <p>
        It is fun to learn programming by printing patterns. This project contains collection of different patterns and some solutions for printing them using javascript.
    </p>
      <Contributing />
    </div>
  </Layout>
)

export default IndexPage
