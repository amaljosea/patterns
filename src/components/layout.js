import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from './sidebar';
import Header from './header';

import '@progress/kendo-theme-default/dist/all.css';
import './layout.css';
import './layout-custom.css';

const Layout = ({ children }) => {
  const [sideBarVisible, setSideBarVisible] = useState(true)
  const onBurgerClick = () => {
    console.log("burger is clicked")
    setSideBarVisible(!sideBarVisible)
  }
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} onBurgerClick={onBurgerClick} />
          <div className="container-flex">
            {(sideBarVisible||window.outerWidth>=760) && <Sidebar className="sidebar-flex" />}
            <div className="content-flex">
              {children}
              <hr />
              <footer>
                © {new Date().getFullYear()}, Built with
              {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </div>
        </>
      )}
    />
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
