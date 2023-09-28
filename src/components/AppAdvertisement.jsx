"use client"

import React, { useState } from "react"
import SectionHeader from "./SectionHeader"
import Button from "./Button"
import Image from "next/image"
import styles from "../styles/componentStyles/appAdvertisement.module.css"

export default function AppAdvertisement() {
  const [appSection, setAppSection] = useState("lite")

  let contents

  switch (appSection) {
    case "web3":
      contents = {
        imagePath: "/images/mobileApplication/web3.png",
        paragraph:
          "Explore the world's best NFT marketplace, DEX, and wallet that supports all of your favorite chains.",
        alt: "Mobile app web3 section image",
      }

      break
    case "pro":
      contents = {
        imagePath: "/images/mobileApplication/pro.png",
        paragraph:
          "With margin and derivatives trading, powerful APIs and trading bots, you can trade like a pro on the go.",
        alt: "Mobile app pro section image",
      }

      break
    default:
      contents = {
        imagePath: "/images/mobileApplication/lite.png",
        paragraph:
          "New to crypto? No problem. Buy crypto for as little as $5 in a tap, and grow your skills as you go.",
        alt: "Mobile app lite section image",
      }
      break
  }

  return (
    <div className={styles["app-advertisement-container"]}>
      <div className={styles["application-images"]}>
        <Image src={contents.imagePath} fill alt={contents.alt} />
      </div>
      <div className={styles["application-information"]}>
        <SectionHeader
          header={"One app. Unlimited possibilities."}
          thinner={true}
        />
        <div className={styles["application-section-buttons"]}>
          <Button
            type={"application-section"}
            content={"Lite"}
            specialClass={"app-section"}
            section={"lite"}
            appSection={appSection}
            setAppSection={setAppSection}
          />
          <Button
            type={"application-section"}
            content={"Web3"}
            specialClass={"app-section"}
            section={"web3"}
            appSection={appSection}
            setAppSection={setAppSection}
          />
          <Button
            type={"application-section"}
            content={"Pro"}
            specialClass={"app-section"}
            section={"pro"}
            appSection={appSection}
            setAppSection={setAppSection}
          />
        </div>
        <p className={styles["application-description"]}>
          {contents.paragraph}
        </p>
      </div>
    </div>
  )
}
