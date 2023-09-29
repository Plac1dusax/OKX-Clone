"use client"

import React from "react"
import styles from "../styles/componentStyles/button.module.css"

export default function Button(props) {
  const { type, content, specialClass, section, appSection, setAppSection } =
    props

  let button

  function handleSectionClick() {
    if (type === "application-section") {
      setAppSection(section)
    }
  }

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
    case "main":
      button = (
        <button
          className={`${styles["button"]} ${styles["main-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break
    case "application-section":
      button = (
        <button
          onClick={handleSectionClick}
          className={`${styles["button"]} ${styles["application-button"]} ${
            styles[specialClass]
          } ${
            type === "application-section" && appSection === section
              ? styles["selected-section"]
              : null
          }`}
        >
          {content}
        </button>
      )
      break
    case "about-section":
      button = (
        <button
          className={`${styles["button"]} ${styles["about-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break
    case "register-section":
      button = (
        <button
          className={`${styles["button"]} ${styles["register-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break
    case "side-bar":
      button = (
        <button
          className={`${styles["button"]} ${styles["side-bar-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break
    case "download-app":
      button = (
        <button
          className={`${styles["button"]} ${styles["download-app-button"]} ${styles[specialClass]}`}
        >
          {content}
        </button>
      )
      break
  }

  return button
}
