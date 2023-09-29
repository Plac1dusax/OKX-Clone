"use client"

import React, { useState, useRef, useEffect, useContext } from "react"
import locales from "../data/locales.json"
import { TbWorldLongitude } from "react-icons/tb"
import { IoIosArrowUp } from "react-icons/io"
import { LocalesContext } from "@/context/LocalesContext"
import styles from "../styles/componentStyles/customSelectBox.module.css"

export default function CustomSelectBox() {
  const [listActive, setListActive] = useState(false)
  const [checkViewPort, setCheckViewPort] = useState(false)
  const listRef = useRef(null)

  const {
    selectedLanguage,
    setSelectedLanguage,
    selectedCurrency,
    setSelectedCurrency,
  } = useContext(LocalesContext)

  const languageList = locales.filter((list) => list.listName === "language")
  const currencyList = locales.filter(
    (list) => list.listName === "local-currency"
  )

  function handleListItemClickLanguage(e) {
    if (e.target.matches("ul")) return

    setSelectedLanguage(e.target.textContent)
  }

  function handleListItemClickCurrency(e) {
    if (e.target.matches("ul")) return

    setSelectedCurrency(e.target.textContent)
  }

  const handleScroll = () => {
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const divCenter = rect.top + rect.height / 2

      setCheckViewPort(divCenter < windowHeight / 2)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={styles["select-box-wrapper"]}>
      <div
        ref={listRef}
        className={`${
          listActive ? styles["list-active"] : styles["list-container"]
        } ${checkViewPort ? styles["up"] : styles["down"]}`}
      >
        <ul className={styles["language"]}>
          <li className={styles["list-header"]}>Language</li>
          <ul
            onClick={handleListItemClickLanguage}
            className={styles["sub-list"]}
          >
            {languageList[0].options.map((option, index) => {
              return (
                <li
                  className={
                    option === selectedLanguage
                      ? `${styles["list-item"]} ${styles["list-item-selected"]}`
                      : styles["list-item"]
                  }
                  key={index}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </ul>
        <ul className={styles["currency"]}>
          <li className={styles["list-header"]}>Local currency</li>
          <ul
            onClick={handleListItemClickCurrency}
            className={styles["sub-list"]}
          >
            {currencyList[0].options.map((option, index) => {
              return (
                <li
                  className={
                    option === selectedCurrency
                      ? `${styles["list-item"]} ${styles["list-item-selected"]}`
                      : styles["list-item"]
                  }
                  key={index}
                >
                  {option}
                </li>
              )
            })}
          </ul>
        </ul>
      </div>
      <div className={styles["box-text"]}>
        <span className={styles["logo"]}>
          <TbWorldLongitude />
        </span>
        <span
          className={styles["text"]}
        >{`${selectedLanguage}/${selectedCurrency}`}</span>
        <span className={styles["arrow"]}>
          <IoIosArrowUp />
        </span>
      </div>
    </div>
  )
}
