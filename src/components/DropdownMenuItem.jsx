import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import DropdownMenu from "./DropdownMenu"
import styles from "../styles/componentStyles/dropdownMenuItem.module.css"

export default function DropdownMenuItem({
  icon,
  isExpandable,
  primaryHeader,
  secondaryHeader,
  expandableContent,
  list,
}) {
  return (
    <>
      <div
        className={
          list
            ? `${styles["dropdown-item-container"]} ${styles["dropdown-item-container-list"]}`
            : `${styles["dropdown-item-container"]}`
        }
      >
        <div className={styles["content"]}>
          <div className={styles["icon"]}>{icon}</div>
          {isExpandable ? (
            <div className={styles["expandable-item-wrapper"]}>
              <div
                className={`${styles["headers"]} ${styles["headers-expandable"]}`}
              >
                <div className={styles["header-primary"]}>{primaryHeader}</div>
                <div className={styles["header-secondary"]}>
                  {secondaryHeader}
                </div>
              </div>
              <div className={styles["expanded-dropdown-menu"]}>
                <DropdownMenu
                  menuType={"expanded"}
                  dropdownContent={expandableContent}
                />
              </div>
              <div className={styles["expand-arrow"]}>
                <MdKeyboardArrowRight />
              </div>
            </div>
          ) : (
            <div className={styles["headers"]}>
              <div className={styles["header-primary"]}>{primaryHeader}</div>
              <div className={styles["header-secondary"]}>
                {secondaryHeader}
              </div>
            </div>
          )}
        </div>
        {list ? (
          <ul className={styles["list-grid"]}>
            {list.map((item, index) => {
              return (
                <li className={styles["list-item-grid"]} key={index}>
                  {item}
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>
    </>
  )
}
