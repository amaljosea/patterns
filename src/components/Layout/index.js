import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Sidebar from '../Sidebar';
import Header from '../header/index';
import { ThemeProvider } from 'styled-components';

import '@progress/kendo-theme-default/dist/all.css';
import './layout.css';
import './layout-custom.css';

const theme = {
  primaryColor: '#9c2515',
};

const Layout = ({ children }) => {
  const [sideBarVisible, setSideBarVisible] = useState(false)
  const onToggle = () => {
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
        <ThemeProvider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} onToggle={onToggle} />
          <div className="container-flex">
            {<Sidebar className={!sideBarVisible ? "sidebar-flex hide" : "sidebar-flex"} />}
            <div className={sideBarVisible ? "content-flex hide" : "content-flex"}  >
              {children}
              <hr />
              <footer>
                {/* © {new Date().getFullYear()}, Built with
              {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> */}
              </footer>
            </div>
          </div>
        </ThemeProvider>
      )}
    />
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
