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
      <h1>Image</h1>
      {fields.des&&<h3>{JSON.parse(fields.des).des}</h3>}
      <div className={styles.image}>
      <PatternImage slug={fields.slug}/>
    </div>
  
      <h1>Output</h1>
        <iframe
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
  allFile(filter: {fields: {slug: {eq: $slug}}}) {
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