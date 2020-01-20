import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'
import Image from '../icons/menu.svg'

const Header = ({ siteTitle, onToggle }) => (
  <header
    className="header"
    style={{
      background: `#9c2515`,
      marginBottom: `1.45rem`,
    }}
  >
    {<button className="toggle-button" onClick={onToggle}>Toggle</button>}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1 style={{ margin: 0 }} className="header__title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle.toUpperCase()}
        </Link>
        <Image/>
      </h1>
      <p className="header__paragraph" style={{color:"white", marginBottom:0}}>Learn programming by printing patterns</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
