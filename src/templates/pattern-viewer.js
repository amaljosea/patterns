import React from "react"
import Layout from "../components/layout"
import PatternImage from "../components/Images/PatternImage"
import { graphql } from "gatsby"
import styles from "./index.module.css"
import toggleIcon from '../icons/github.svg'
import Contributing from "../components/Contributing"

export default ({ data }) => {
  console.log(">>>>>>>", data)
  const fields = data.allFile.edges[0].node.fields
  return (
    <Layout>
      <div className="pattern-viewer">
        <h3>Print a pattern with the following output</h3>
        <div className={styles.image}>
          <PatternImage slug={fields.slug} />
          {fields.des && <h3>{JSON.parse(fields.des).des}</h3>}
        </div>

        <h3>Output</h3>
        <iframe
          style={{
            width: "100%",
            height: "40vh",
            overflow: "scroll"
          }}
          srcDoc={`
          <html>
           <script> 
           console.log = (...arguments) => {
            arguments.forEach((item)=>{
              document.getElementById("output").innerHTML +=
              item.toString().replace(/ /g, "&nbsp&nbsp") + "<br>";
            })
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
        <h3>Code</h3>
        <pre style={{
          width: "100%",
          overflow: "scroll",
          height: "40vh"
        }}>{fields.content}</pre>
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
