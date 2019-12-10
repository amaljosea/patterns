import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/intro"
import Tech from "../components/tech"
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
    <Tech/>
    <Projects/>
    <Link to="/page-2/">Works</Link>
    <Link to="/page-2/">About</Link>
    <Link to="/contacter/">Contact</Link>
  </Layout>
)

export default IndexPage
