import React from "react"
import styles from "../styles/componentStyles/sectionHeader.module.css"

export default function SectionHeader({ header, thinner }) {
  return (
    <h1
      className={`${styles["section-header"]} ${
        thinner ? styles["thinner-header"] : null
      }`}
    >
      {header}
    </h1>
  )
}
