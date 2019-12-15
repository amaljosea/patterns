import React from "react"
import Tech from "../images/Tech"
import styles from "./index.module.css"
 
const Intro = () => {
console.log("styles==>",styles)
 return (
    <div className={styles.tech}>
    <h1>Technologies</h1>
    <div className={styles.image}>
      <Tech />
    </div>
    <h3>HTML</h3>
    <h3>CSS</h3>
    <h3>Javascript</h3>
    <h3>React</h3>
    <h3>React Native</h3>
    </div>
)
}



export default Intro
