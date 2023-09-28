import React from "react"
import styles from "../styles/componentStyles/footerList.module.css"

export default function FooterList({ header, listArray, margin }) {
  return (
    <div
      className={`${styles["footer-list-wrapper"]} ${
        margin ? styles["margin"] : null
      }`}
    >
      <div className={styles["footer-list-header"]}>{header}</div>
      <ul className={styles["footer-list"]}>
        {listArray.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
