"use client"

import React, { useState, useEffect, useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import locales from "../data/locales.json"
import { BsFillInfoCircleFill } from "react-icons/bs"
import LocalesGridItem from "./LocalesGridItem"
import { LocalesContext } from "@/context/LocalesContext"
import styles from "../styles/componentStyles/localesModal.module.css"

export default function LocalesModal() {
  const [section, setSection] = useState("language")
  const [gridItems, setGridItems] = useState([])

  const {
    selectedLanguage,
    setSelectedLanguage,
    selectedCurrency,
    setSelectedCurrency,
    modalOpen,
    setModalOpen,
  } = useContext(LocalesContext)

  useEffect(() => {
    section === "language"
      ? setGridItems(locales[0].options)
      : setGridItems(locales[1].options)
  }, [section])

  function handleSelectLanguageSection() {
    setSection("language")
  }

  function handleSelectCurrencySection() {
    setSection("local-currency")
  }

  function handleModalClose() {
    setModalOpen(!modalOpen)
  }

  return (
    <div
      className={
        modalOpen ? styles["modal-wrapper-active"] : styles["modal-wrapper"]
      }
    >
      <div className={styles["modal-header"]}>
        <div className={styles["section-buttons"]}>
          <div
            onClick={handleSelectLanguageSection}
            className={
              section === "language"
                ? styles["section-button-selected"]
                : styles["section-button"]
            }
          >
            Language
          </div>
          <div
            onClick={handleSelectCurrencySection}
            className={
              section === "local-currency"
                ? styles["section-button-selected"]
                : styles["section-button"]
            }
          >
            Currency
          </div>
        </div>
        <div onClick={handleModalClose} className={styles["close-button"]}>
          <AiOutlineClose />
        </div>
      </div>
      <div className={styles["modal-body"]}>
        {section === "language" ? (
          <div className={styles["info"]}>
            <div className={styles["info-icon"]}>
              <BsFillInfoCircleFill />
            </div>
            <div className={styles["info-text"]}>
              Your language selection applies to OKX emails, in-app
              notifications and all devices you're logged in to
            </div>
          </div>
        ) : null}
        <div className={styles["modal-grid"]}>
          {gridItems.map((item, index) => {
            return (
              <LocalesGridItem
                key={index}
                section={section}
                content={item}
                selectedLanguage={selectedLanguage}
                setSelectedLanguage={setSelectedLanguage}
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
