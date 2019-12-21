const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const fs = require(`fs-extra`)

async function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions
  if (node.sourceInstanceName === "code" && node.extension === "js") {
    async function loadNodeContent(fileNode) {
      return fs.readFile(fileNode.absolutePath, `utf-8`)
    }

    async function loadNodeContentDes(fileNode) {
      return fs.readFile(fileNode.absolutePath.slice(0, -2) + "json", `utf-8`)
    }

    let content = ""
    try {
      content = await loadNodeContent(node)
    } catch (e) {
      console.log(e)
    }

    let des = ""
    try {
      des = await loadNodeContentDes(node)
    } catch (e) {
      console.log(e)
    }

    createNodeField({
      node,
      name: `des`,
      value: des,
    })
    createNodeField({
      node,
      name: `content`,
      value: content,
    })
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const resultsCode = await graphql(`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "code" }, extension: { eq: "js" } }
      ) {
        edges {
          node {
            id
            fields {
              content
              slug
            }
          }
        }
      }
    }
  `)
  resultsCode.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/pattern-viewer.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateNode = onCreateNode
