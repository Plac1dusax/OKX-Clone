import React from "react"
import NavigationListItem from "./NavigationListItem"
import styles from "../styles/componentStyles/navigation.module.css"

export default function Navigation({ type, navigationItems }) {
  return (
    <ul className={styles["navigation-container"]}>
      {navigationItems.map((item) => {
        return <NavigationListItem key={item.id} {...item} />
      })}
    </ul>
  )
}
