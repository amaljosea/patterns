import React from "react"
import styles from "./index.module.css"
 
const Projects = () => {
console.log("styles==>",styles)
 return (
    <div className={styles.project}>
    <h1>Projects</h1>
    <h3>Azimuth Coordinator</h3>
    <h3>React annotate text</h3>
    <div style={{ height: 100 }}></div>
    <h1>More</h1>
    <h3>Blog</h3>
    <h3>Github</h3>
    <h3>Codepen</h3>
    </div>
)
}



export default Projects
