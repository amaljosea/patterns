import React from "react"
import Layout from "../components/layout"
import PatternImage from "../components/Images/PatternImage"
import { graphql } from "gatsby"
import styles from "./index.module.css"

export default ({ data }) => {
  console.log(">>>>>>>", data)
  const fields = data.allFile.edges[0].node.fields
  return (
    <Layout>
      <div className={styles.image}>
        <PatternImage slug={fields.slug} />
        {fields.des && <h3>{JSON.parse(fields.des).des}</h3>}
      </div>

      <h1>Output</h1>
      <iframe
        style={{
          width: "100%",
          height: "50%",
        }}
        srcDoc={`
          <html>
           <script> 
           console.log = item => {
            document.getElementById("output").innerHTML +=
              item.replace(/ /g, "&nbsp&nbsp") + "<br>";
          };
           </script>
            <body>
            <div id="output">
            </body>
            <script> 
            ${fields.content}
            </script>
            </html>
           `}
      />
      <h1>Code</h1>
      <pre>{fields.content}</pre>
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
