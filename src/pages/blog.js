import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"


export default ({ data }) => {
  console.log(">>>>>>>",data)
  return(
  <Layout>
    <h1>data</h1>
    {data.allFile.edges.map((item)=><p key={item.id}>{item.node.relativePath}</p>)}
    <div>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />
    </div>
  </Layout>
)
}
export const query = graphql`
query MyQuery {
  allFile {
    edges {
      node {
        name
        id
        size
        relativePath
        absolutePath
      }
    }
  }
}`