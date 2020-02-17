import React from "react"
import Layout from "../components/Layout"
import Editor from "../components/Editor"

import PatternImage from "../components/Images/PatternImage"
import { graphql } from "gatsby"
import styles from "./index.module.css"
import Contributing from "../components/Contributing"
import styled from "styled-components"

const BreadCrumb = styled.p`
  color:${(props) => props.theme.primaryColor};
`

export default ({ data }) => {
  console.log(">>>>>>>", data)
  const fields = data.allFile.edges[0].node.fields
  const breadCrumb = fields.slug.split('/').filter((i) => i).join(" > ")
  return (
    <Layout>
      <div className="pattern-viewer">
        <BreadCrumb>{breadCrumb}</BreadCrumb>
        <h3>Print a pattern with the following output</h3>
        <div className={styles.image}>
          <PatternImage slug={fields.slug} />
          {fields.des && <h3>{JSON.parse(fields.des).des}</h3>}
        </div>
        <Editor solution={fields.content}/>
        <Contributing />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allFile(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          fields {
            content
            slug
            des
          }
        }
      }
    }
  }
`
