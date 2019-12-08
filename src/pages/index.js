import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Image name="face"/>
    <h1>Hi</h1>
    <h3>I am Amal Jose, a software developer focusing on front end technologies.</h3>
    <p>Always making something.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image name="face"/>
    </div>
    <div style={{height:100}}></div>
    <h1>Technologies</h1>
    <h3>HTML</h3>
    <h3>CSS</h3>
    <h3>Javascript</h3>
    <h3>React</h3>
    <h3>React Native</h3>
    <div style={{height:100}}></div>
    <h1>Projects</h1>
    <h3>Azimuth Coordinator</h3>
    <h3>React annotate text</h3>
    <div style={{height:100}}></div>
    <h1>More</h1>
    <h3>Blog</h3>
    <h3>Instagram</h3>
    <h3>Github</h3>
    <Link to="/page-2/">Works</Link>
    <Link to="/page-2/">About</Link>
    <Link to="/page-2/">Contact</Link>
  </Layout>
)

export default IndexPage
