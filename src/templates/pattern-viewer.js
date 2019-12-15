import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  console.log(">>>>>>>", data)
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
        <pre>{data.allFile.edges[0].node.fields.content}</pre>
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
        }
      }
    }
  }
}

`