import React from "react"
import styles from "../styles/componentStyles/sectionHeader.module.css"

export default function SectionHeader({ header }) {
  return <h1 className={styles["section-header"]}>{header}</h1>
}
