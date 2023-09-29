import React from "react"
import { BsFire } from "react-icons/bs"
import styles from "../styles/componentStyles/coin.module.css"

export default function Coin(props) {
  const { id, rating, hot, name, value, change, positive, color } = props

  return (
    <li id={id} className={styles["coin-container"]}>
      <div className={styles["coin-information"]}>
        <div
          className={`${styles["coin-rating"]} ${hot ? styles["hot"] : null}`}
        >
          {rating}
        </div>
        <div
          style={{ backgroundColor: `${color}` }}
          className={styles["coin-icon"]}
        ></div>
        <div className={styles["coin-name"]}>
          {name}
          <span>
            {hot ? (
              <span>
                <BsFire />
              </span>
            ) : null}
          </span>
        </div>
      </div>
      <div className={styles["coin-value"]}>
        <div className={styles["value"]}>{value}</div>
        <div
          className={`${styles["change"]} ${
            positive ? styles["gain"] : styles["lose"]
          }`}
        >
          {change}
        </div>
      </div>
    </li>
  )
}
