"use client"

import React, { useContext } from "react"
import { LocalesContext } from "@/context/LocalesContext"
import { BsCheckLg } from "react-icons/bs"
import styles from "../styles/componentStyles/localesGridItem.module.css"

export default function LocalesGridItem(props) {
  const {
    selectedLanguage,
    setSelectedLanguage,
    selectedCurrency,
    setSelectedCurrency,
    modalOpen,
    setModalOpen,
    content,
    section,
  } = props

  const {} = useContext(LocalesContext)

  function handleGridItemClick() {
    if (section === "language") {
      setSelectedLanguage(content)
    } else {
      setSelectedCurrency(content)
    }

    setModalOpen(false)
  }

  return (
    <div
      onClick={handleGridItemClick}
      className={`${
        section === "language" && content === selectedLanguage
          ? `${styles["grid-item-wrapper"]} ${styles["selected"]}`
          : styles["grid-item-wrapper"]
      } ${
        section === "local-currency" && content === selectedCurrency
          ? `${styles["grid-item-wrapper"]} ${styles["selected"]}`
          : styles["grid-item-wrapper"]
      }`}
    >
      {content}
      <span className={styles["check"]}>
        {section === "language" && content === selectedLanguage ? (
          <BsCheckLg />
        ) : section === "local-currency" && content === selectedCurrency ? (
          <BsCheckLg />
        ) : null}
      </span>
    </div>
  )
}
