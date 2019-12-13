import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(">>>>>>>", data)
  debugger
  return (
    <Layout>
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
            ${data.allFile.edges[0].node.fields.content}
            </script>
            </html>
           `}
        />
      <h1>Code</h1>
      <p>
        <pre>{data.allFile.edges[0].node.fields.content}</pre>
      </p>
    </Layout>
  )
}
export const query = graphql`
  {
    allFile(
      filter: { dir: { eq: "/Users/amaljose/study/gatsby-site/src/code" } }
    ) {
      edges {
        node {
          id
          relativeDirectory
          absolutePath
          base
          blocks
          parent {
            id
          }
          relativePath
          rdev
          publicURL
          root
          children {
            id
          }
          dev
          dir
          ext
          extension
          mode
          modifiedTime
          mtime
          name
          fields {
            content
          }
        }
      }
    }
  }
`
