import React from "react"
import Face from "../images/Face"
import styles from "./index.module.css"

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1>Hi</h1>
      <h3>
        I am Amal Jose, a software developer focusing on front end technologies.
      </h3>
      <p>Always making something.</p>
      <div className={styles.image}>
        <Face />
      </div>
    </div>
  )
}

export default Intro
