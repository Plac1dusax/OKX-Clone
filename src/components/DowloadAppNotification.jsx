import React from "react"
import Image from "next/image"
import Button from "./Button"
import styles from "../styles/componentStyles/downloadAppNotification.module.css"

export default function DownloadAppNotification() {
  return (
    <div className={styles["notification-container"]}>
      <div className={styles["notification-wrapper"]}>
        <div className={styles["application-logo"]}>
          <Image
            src={"/images/companyLogos/company-logo.png"}
            fill
            alt="OKX company logo"
          />
        </div>
        <div className={styles["notification-headers"]}>
          <div className={styles["header-main"]}>OKX APP</div>
          <div className={styles["header"]}>Trade Anytime, Anywhere</div>
        </div>
      </div>
      <div className={styles["download-button"]}>
        <Button
          type={"download-app"}
          content={"Download"}
          specialClass={"application-download"}
        />
      </div>
    </div>
  )
}
