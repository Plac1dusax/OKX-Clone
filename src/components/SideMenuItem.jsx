"use client"
import React, { useState, useContext } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { LocalesContext } from "@/context/LocalesContext"
import styles from "../styles/componentStyles/sideMenuItem.module.css"

export default function SideMenuItem(props) {
  const { header, dropdownContent } = props
  const [buyCryptoList, setBuyCryptoList] = useState(false)
  const [discoverList, setDiscoverList] = useState(false)
  const [institutionalList, setInstitutionalList] = useState(false)
  const [growList, setGrowList] = useState(false)
  const [tradeList, setTradeList] = useState(false)
  const [buildList, setBuildList] = useState(false)
  const [oKBlist, setOKBList] = useState(false)
  const [oKTList, setOKTList] = useState(false)
  const [moreList, setMoreList] = useState(false)
  const [supportList, setSupportList] = useState(false)

  const { selectedLanguage, selectedCurrency, setModalOpen } =
    useContext(LocalesContext)

  let menuItem

  function handleBuyCryptoListClick() {
    setBuyCryptoList(!buyCryptoList)
  }

  function handleDiscoverListClick() {
    setDiscoverList(!discoverList)
  }

  function handleTradeListClick() {
    setTradeList(!tradeList)
  }

  function handleGrowListClick() {
    setGrowList(!growList)
  }

  function handleInstitutionalListClick() {
    setInstitutionalList(!institutionalList)
  }

  function handleBuildListClick() {
    setBuildList(!buildList)
  }

  function handleOKBListClick() {
    setOKBList(!oKBlist)
  }

  function handleOKTListClick() {
    setOKTList(!oKTList)
  }

  function handleMoreListClick() {
    setMoreList(!moreList)
  }

  function handleSupportListClick() {
    setSupportList(!supportList)
  }

  function handleLocalesModal() {
    setModalOpen(true)
  }

  switch (header.toLowerCase()) {
    case "learn":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["learn-list"]}`}>
          <div className={styles["menu-item-header"]}>
            <div>{header}</div>
          </div>
        </li>
      )
      break
    case "build":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["build-list"]}`}>
          <div
            onClick={handleBuildListClick}
            className={
              buildList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {buildList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return content.commonGroupHeader === "OKB Chain" ? (
                    <li
                      className={styles["build-list-inside"]}
                      onClick={handleOKBListClick}
                    >
                      <div
                        className={
                          oKBlist
                            ? styles["menu-item-header-active"]
                            : styles["menu-item-header"]
                        }
                      >
                        <div>{content.commonGroupHeader}</div>
                        <IoIosArrowDown />
                      </div>
                      {oKBlist ? (
                        <ul className={styles["build-list"]}>
                          {content.groupItems.map((item, index) => {
                            return (
                              <a
                                key={index}
                                href="#"
                                className={styles["menu-item-link"]}
                              >
                                {item.primaryHeader}
                              </a>
                            )
                          })}
                        </ul>
                      ) : null}
                    </li>
                  ) : (
                    <li
                      className={styles["build-list-inside"]}
                      onClick={handleOKTListClick}
                    >
                      <div
                        className={
                          oKTList
                            ? styles["menu-item-header-active"]
                            : styles["menu-item-header"]
                        }
                      >
                        <div>{content.commonGroupHeader}</div>
                        <IoIosArrowDown />
                      </div>
                      {oKTList ? (
                        <ul className={styles["build-list"]}>
                          {content.groupItems.map((item, index) => {
                            return (
                              <a
                                key={index}
                                href="#"
                                className={styles["menu-item-link"]}
                              >
                                {item.primaryHeader}
                              </a>
                            )
                          })}
                        </ul>
                      ) : null}
                    </li>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "more":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["more-list"]}`}>
          <div
            onClick={handleMoreListClick}
            className={
              moreList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {moreList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return content.items.map((item) => {
                    return (
                      <a href="#" className={styles["menu-item-link"]}>
                        {item.primaryHeader}
                      </a>
                    )
                  })
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "buy crypto":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["buy-crypto-list"]}`}>
          <div
            onClick={handleBuyCryptoListClick}
            className={
              buyCryptoList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {buyCryptoList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "discover":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["discover-list"]}`}>
          <div
            onClick={handleDiscoverListClick}
            className={
              discoverList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {discoverList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "trade":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["trade-list"]}`}>
          <div
            onClick={handleTradeListClick}
            className={
              tradeList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {tradeList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "grow":
      menuItem = (
        <li className={`${styles["menu-item"]} ${styles["grow-list"]}`}>
          <div
            onClick={handleGrowListClick}
            className={
              growList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {growList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "institutional":
      menuItem = (
        <li
          className={`${styles["menu-item"]} ${styles["institutional-list"]}`}
        >
          <div
            onClick={handleInstitutionalListClick}
            className={
              institutionalList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {institutionalList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )
      break
    case "support":
      menuItem = (
        <li
          className={`${styles["menu-item"]} ${styles["menu-item-visible"]} ${styles["support-list"]}`}
        >
          <div
            onClick={handleSupportListClick}
            className={
              supportList
                ? styles["menu-item-header-active"]
                : styles["menu-item-header"]
            }
          >
            <div>{header}</div>
            <IoIosArrowDown />
          </div>
          {supportList ? (
            <div className={styles["menu-item-links"]}>
              {dropdownContent &&
                dropdownContent.map((content) => {
                  return (
                    <a href="#" className={styles["menu-item-link"]}>
                      {content.primaryHeader}
                    </a>
                  )
                })}
            </div>
          ) : null}
        </li>
      )

      break
    case "english/usd":
      menuItem = (
        <li
          onClick={handleLocalesModal}
          className={`${styles["menu-item"]} ${styles["menu-item-visible"]} ${styles["language-list"]}`}
        >
          <div className={styles["menu-item-header"]}>
            <div>{`${selectedLanguage}/${selectedCurrency}`}</div>
          </div>
        </li>
      )
      break
  }

  return menuItem
}
