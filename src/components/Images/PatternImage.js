import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const PatternImage = ({ slug }) => {
  let data = useStaticQuery(graphql`
    {
      images: allFile(
        filter: { extension: { eq: "jpg" }, sourceInstanceName: { eq: "code" } }
      ) {
        edges {
          node {
            title: name
            absolutePath
            relativePath
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log("childImageSharp===>", data)

  const fluid = data.images.edges.find(n => {
    console.log(
      n.node.relativePath.slice(0, -4),
      "-",
      slug.slice(0, -1).slice(1)
    )
    return n.node.relativePath.slice(0, -4) === slug.slice(0, -1).slice(1)
  })
  console.log("fluid===>", fluid)

  if (!fluid) return null
  return (
    <>
      <Img fluid={fluid.node.childImageSharp.fluid} width={100} />
    </>
  )
}

export default PatternImage
