const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require(`fs-extra`)

async function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  } else if (node.sourceInstanceName === "code" && node.extension === "js") {
    async function loadNodeContent(fileNode) {
      return fs.readFile(fileNode.absolutePath, `utf-8`)
    }
    const content = await loadNodeContent(node)
    createNodeField({
      node,
      name: `content`,
      value: content
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = onCreateNode
