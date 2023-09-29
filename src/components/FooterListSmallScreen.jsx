"use client"

import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import styles from "../styles/componentStyles/footerListSmallScreen.module.css"

export default function FooterListSmallScreen({ header, list }) {
  const [footerActive, setFooterActive] = useState(false)

  function handleFooterClick() {
    setFooterActive(!footerActive)
  }

  return (
    <div className={styles["footer-list-wrapper"]}>
      <div
        onClick={handleFooterClick}
        className={styles["footer-list-header-wrapper"]}
      >
        <div className={styles["footer-list-header"]}>{header}</div>
        <div
          className={
            footerActive
              ? styles["header-arrow-active"]
              : styles["header-arrow"]
          }
        >
          <IoIosArrowDown />
        </div>
      </div>
      {footerActive ? (
        <div className={styles["footer-items"]}>
          {list.map((listItem, index) => {
            return (
              <a key={index} href="#">
                {listItem}
              </a>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
