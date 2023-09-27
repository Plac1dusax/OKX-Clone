import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import SectionHeader from "@/components/SectionHeader"
import Button from "@/components/Button"
import sponsor from "../data/sponsor.json"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  return (
    <div className={styles["homepage-container"]}>
      <Header />
      <div className={`${styles["section"]} ${styles["main-section"]}`}>
        <div className={styles["header-and-sponsor"]}>
          <SectionHeader
            header={
              "Faster, better, stronger than your average crypto exchange"
            }
          />
          <div className={styles["input-area"]}>
            <div className={styles["input-wrapper"]}>
              <input
                className={styles["email-input"]}
                type="email"
                placeholder="Email/Phone"
              />
            </div>
            <Button
              type={"main"}
              content={"Try OKX"}
              specialClass={"main-button"}
            />
          </div>
          <div className={styles["sponsor"]}>
            {sponsor.map((logo) => {
              return (
                <div
                  className={`${styles["sponsor-logo-container"]} ${
                    styles[`logo-${logo.id}`]
                  }`}
                >
                  <Image key={logo.id} src={logo.path} alt={logo.alt} fill />
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles["section-video"]}>
          <video
            autoPlay
            loop
            muted
            src={"/videos/main-section.mp4"}
            className={styles["main-section-video"]}
          />
        </div>
        <div className={styles["currencies-wrapper"]}>
          <div className={styles["currencies"]}>
            <a href="#">BTC $26,243.20 (+0.10%)</a>
            <a href="#">ETH $1,597.13 (+0.22%)</a>
            <a href="#">OKB $42.80 (-0.60%)</a>
            <a href="#">LTC $63.64 (-0.22%)</a>
            <a href="#">XRP $0.50 (+0.37%)</a>
            <a href="#">BCH $229.06 (+6.72%)</a>
            <a href="#">SOL $18.95 (-0.36%)</a>
          </div>
          <div className={styles["currencies"]}>
            <a href="#">BTC $26,243.20 (+0.10%)</a>
            <a href="#">ETH $1,597.13 (+0.22%)</a>
            <a href="#">OKB $42.80 (-0.60%)</a>
            <a href="#">LTC $63.64 (-0.22%)</a>
            <a href="#">XRP $0.50 (+0.37%)</a>
            <a href="#">BCH $229.06 (+6.72%)</a>
            <a href="#">SOL $18.95 (-0.36%)</a>
          </div>
        </div>
      </div>
      <div className={`${styles["section"]} ${styles["trade-section"]}`}>
        <div className={styles["header-and-description"]}>
          <SectionHeader header={"Trade like a pro"} />
          <p className={styles["description"]}>
            Get the lowest fees, fastest transactions, powerful APIs, and more.
          </p>
        </div>
        <div className={styles["trade-section-video"]}>
          <video
            autoPlay
            loop
            muted
            src={"/videos/trade-section.mp4"}
            className={styles["trade-video"]}
          />
        </div>
      </div>
    </div>
  )
}
