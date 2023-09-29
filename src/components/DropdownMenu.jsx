"use client"

import React from "react"
import Image from "next/image"
import DropdownMenuItem from "./DropdownMenuItem"
import notifications from "../data/notifications.json"
import Notification from "./Notification"
import { FaDiscord } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { v4 as uuidv4 } from "uuid"
import styles from "../styles/componentStyles/dropdownMenu.module.css"

export default function DropdownMenu(props) {
  const { menuType, dropdownContent } = props

  const contactList = [
    {
      id: uuidv4(),
      header: "Support center",
    },
    {
      id: uuidv4(),
      header: "My tickets",
    },
    {
      id: uuidv4(),
      header: "Connect with OKX",
    },
    {
      id: uuidv4(),
      header: "Discord",
      icon: <FaDiscord />,
    },
    {
      id: uuidv4(),
      header: "Telegram",
      icon: <FaTelegramPlane />,
    },
  ]

  let dropdownMenu

  switch (menuType) {
    case "common-group":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]} ${styles["expandable-active"]} `}
        >
          {dropdownContent.map((content) => {
            return (
              <div key={uuidv4()} className={styles["expanded-content-list"]}>
                <p className={styles["list-header"]}>
                  {content.commonGroupHeader}
                </p>
                {content.groupItems.map((item) => {
                  return (
                    <>
                      <DropdownMenuItem
                        key={uuidv4()}
                        icon={item.icon}
                        primaryHeader={item.primaryHeader}
                        secondaryHeader={item.secondaryHeader}
                        wideSecondary={item?.wideSecondary}
                        isExpandable={item.isExpandable}
                        expandableContent={item.expandableContent}
                      />
                    </>
                  )
                })}
              </div>
            )
          })}
        </div>
      )
      break
    case "separate-list":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]}  ${styles["separate-list"]}`}
        >
          {dropdownContent &&
            dropdownContent.map((content) => {
              return (
                <div className={styles["separate-list-item"]} key={uuidv4()}>
                  <p className={styles["separate-list-header"]}>
                    {content.listHeader}
                  </p>
                  {content.items.map((item) => {
                    return (
                      <DropdownMenuItem
                        key={uuidv4()}
                        icon={item.icon}
                        primaryHeader={item.primaryHeader}
                        secondaryHeader={item.secondaryHeader}
                        isSeparate={true}
                        wideSecondary={content.wideSecondary}
                      />
                    )
                  })}
                </div>
              )
            })}
        </div>
      )
      break
    case "none":
      dropdownMenu = null
      break
    case "expanded":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]}  ${styles["dropdown-menu-wrapper-expanded"]} `}
        >
          {dropdownContent &&
            dropdownContent.map((content) => {
              return (
                <DropdownMenuItem
                  key={uuidv4()}
                  icon={content.icon}
                  isExpandable={false}
                  primaryHeader={content.primaryHeader}
                  secondaryHeader={content.secondaryHeader}
                  wideSecondary={content.wideSecondary}
                />
              )
            })}
        </div>
      )
      break
    case "download-app":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]} ${styles["option-dropdown"]} ${styles["dropdown-menu-barcode"]}`}
        >
          <div className={styles["barcode-container"]}>
            <div className={styles["barcode-header"]}>Download app</div>
            <div className={styles["barcode-wrapper"]}>
              <Image
                src={"/images/barcode/barcode.png"}
                fill
                alt="Application download barcode for desktop and mobile devices"
              />
            </div>
          </div>
          <div className={styles["options-and-description"]}>
            <a href="#" className={styles["more-options-button"]}>
              More options
            </a>
            <div className={styles["description"]}>For mobile and desktop</div>
          </div>
        </div>
      )
      break
    case "notifications":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]} ${styles["option-dropdown"]} ${styles["dropdown-menu-notifications"]}`}
        >
          <div className={styles["notifications-container"]}>
            {notifications.map((notification) => {
              return <Notification key={uuidv4()} {...notification} />
            })}
            <a className={styles["more-announcements"]}>More announcements</a>
          </div>
        </div>
      )
      break
    case "contact":
      dropdownMenu = (
        <div
          className={`${styles["dropdown-menu-wrapper"]} ${styles["option-dropdown"]} ${styles["dropdown-menu-contact"]}`}
        >
          {contactList.map((contact) => {
            return contact.icon ? (
              <a
                key={contact.id}
                className={`${styles["contact-list-item"]} ${styles["contact-flex"]}`}
              >
                {contact.header}
                <div className={styles["icon-wrapper"]}>{contact.icon}</div>
              </a>
            ) : (
              <a className={styles["contact-list-item"]}>{contact.header}</a>
            )
          })}
        </div>
      )
      break
    default:
      dropdownMenu = (
        <div className={styles["dropdown-menu-wrapper"]}>
          {dropdownContent &&
            dropdownContent.map((content, index) => {
              return (
                <DropdownMenuItem
                  key={index}
                  icon={content.icon}
                  isExpandable={false}
                  primaryHeader={content.primaryHeader}
                  secondaryHeader={content.secondaryHeader}
                  list={content.list}
                  wideSecondary={content.wideSecondary}
                />
              )
            })}
        </div>
      )
      break
  }

  return dropdownMenu
}
