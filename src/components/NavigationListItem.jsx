import React from "react"
import DropdownMenu from "./DropdownMenu"
import { IoIosArrowDown } from "react-icons/io"
import styles from "../styles/componentStyles/navigationListItem.module.css"

export default function NavigationListItem(props) {
  const { header, menuType, dropdownContent } = props

  return (
    <li className={styles["navigation-item-container"]}>
      <span className={styles["navigation"]}>{header}</span>
      {header === "Learn" ? null : (
        <span className={styles["navigation-arrow"]}>
          <IoIosArrowDown />
        </span>
      )}
      <div className={styles["dropdown-menu-container"]}>
        <DropdownMenu menuType={menuType} dropdownContent={dropdownContent} />
      </div>
    </li>
  )
}
