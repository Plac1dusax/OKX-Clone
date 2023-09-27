import React from "react"
import styles from "../styles/componentStyles/notification.module.css"

export default function Notification({ header, date }) {
  return (
    <a href="#" className={styles["notification-container"]}>
      <div className={styles["header"]}>{header}</div>
      <div className={styles["date"]}>{date}</div>
    </a>
  )
}
