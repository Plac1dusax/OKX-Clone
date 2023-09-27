import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  return (
    <div className={styles["homepage-container"]}>
      <Header />
    </div>
  )
}
