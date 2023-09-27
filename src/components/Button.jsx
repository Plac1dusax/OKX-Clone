import React from "react"
import styles from "../styles/componentStyles/button.module.css"

export default function Button({ type, content, specialClass }) {
  let button

  switch (type) {
    case "mode":
      button = (
        <button
          className={`${styles["button"]} ${styles["mode-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break

    default:
      break
  }

  return button
}
