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
    <div>
    <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
    {/* <Intro/> */}
    <Tech/>
    <Projects/>
    <Link to="/page-2/">Works</Link>
    <Link to="/page-2/">About</Link>
    <Link to="/contacter/">Contact</Link>
  </Layout>
)

export default IndexPage
