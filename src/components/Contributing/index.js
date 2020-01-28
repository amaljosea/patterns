import React from "react"
import styles from "./index.module.css"
import githubIcon from '../../icons/github.svg'

const Contributing = () => (
  <div className={styles.conributing_container}>
    For contributing, clone the repo at: <a href="https://github.com/howareyouami/patterns">
      <svg style={{ margin: "10px", width: "40px" }}>
        <use xlinkHref={`#${githubIcon.id}`} />
      </svg>
    </a>
  </div>
)


export default Contributing
