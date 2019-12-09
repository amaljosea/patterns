import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Face from "../components/images/Face"
import Tech from "../components/images/Tech"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi</h1>
    <h3>
      I am Amal Jose, a software developer focusing on front end technologies.
    </h3>
    <p>Always making something.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Face />
    </div>
    <div style={{ height: 100 }}></div>
    <h1>Technologies</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Tech />
    </div>
    <h3>HTML</h3>
    <h3>CSS</h3>
    <h3>Javascript</h3>
    <h3>React</h3>
    <h3>React Native</h3>
    <div style={{ height: 100 }}></div>
    <h1>Projects</h1>
    <h3>Azimuth Coordinator</h3>
    <h3>React annotate text</h3>
    <div style={{ height: 100 }}></div>
    <h1>More</h1>
    <h3>Blog</h3>
    <h3>Github</h3>
    <h3>Codepen</h3>
    <Link to="/page-2/">Works</Link>
    <Link to="/page-2/">About</Link>
    <Link to="/page-2/">Contact</Link>
  </Layout>
)

export default IndexPage
