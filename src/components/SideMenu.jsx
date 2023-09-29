import React from "react"
import { AiOutlineClose } from "react-icons/ai"
import Button from "./Button"
import SideMenuItem from "./SideMenuItem"
import styles from "../styles/componentStyles/sideMenu.module.css"

export default function SideMenu({
  navigationItems,
  sideMenuOpen,
  setSideMenuOpen,
}) {
  function handleSideMenuClose() {
    setSideMenuOpen(false)
  }

  const supportAndCurrency = [
    {
      header: "Support",
      dropdownContent: [
        {
          primaryHeader: "Support center",
        },
        {
          primaryHeader: "My tickets",
        },
        {
          primaryHeader: "Connect with OKX",
        },
        {
          primaryHeader: "Discord",
        },
        {
          primaryHeader: "Telegram",
        },
      ],
    },
    {
      header: "English/USD",
    },
  ]

  return sideMenuOpen ? (
    <div className={styles["side-menu-container"]}>
      <div onClick={handleSideMenuClose} className={styles["close-button"]}>
        <AiOutlineClose />
      </div>
      <div className={styles["login-section"]}>
        <a className={styles["sign-up"]}>Sign up</a>
        <a className={styles["login"]} href="#">
          Log in
        </a>
      </div>
      <div className={styles["mode-buttons"]}>
        <Button
          type={"mode"}
          content={"Exchange"}
          specialClass={"button-exchange"}
        />
        <Button
          type={"mode"}
          content={"Wallet"}
          specialClass={"button-wallet"}
        />
      </div>
      <ul className={styles["menu-items-list"]}>
        {navigationItems.map((item) => {
          return <SideMenuItem key={item.id} {...item} />
        })}
      </ul>
      <ul className={styles["menu-items-list"]}>
        {supportAndCurrency.map((item) => {
          return <SideMenuItem key={item.id} {...item} />
        })}
      </ul>
      <Button
        type={"side-bar"}
        content={"Download OKX App"}
        specialClass={"download-okx-app"}
      />
    </div>
  ) : null
}
