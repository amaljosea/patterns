import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { parseLinksToTree, formatForWiki } from '../utils/parse-links-to-tree';

import { NavTree } from './navtree';
import './sidebar.css';

const Sidebar = ({ className }) => (
  <StaticQuery
    query={graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "code"},extension: {eq: "js"}}) {
        edges {
          node {
            title : name
            fields {
              slug
            }
          }
        }
      }
    }
  `}
    render={({ allFile: { edges: pages } }) => {
      console.log("pages===>",pages)
      // console.log("formatForWiki===>",formatForWiki(pages))


      return(
        // <h1>Hii</h1>
       <NavTree tree={parseLinksToTree(pages)} className={className} />
    )}}
  />
);

export default Sidebar;
