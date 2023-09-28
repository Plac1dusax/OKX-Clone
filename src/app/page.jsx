import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import SectionHeader from "@/components/SectionHeader"
import Button from "@/components/Button"
import sponsor from "../data/sponsor.json"
import AppAdvertisement from "@/components/AppAdvertisement"
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
      <div
        className={`${styles["section"]} ${styles["mobile-application-section"]}`}
      >
        <AppAdvertisement />
      </div>
      <div className={`${styles["section"]} ${styles["evolution-section"]}`}>
        <SectionHeader
          header={"With you every step of the way"}
          thinner={true}
        />
        <p className={styles["description-evolution"]}>
          From your first crypto trade to your first NFT purchase, you'll have
          us to guide you through the process. No stupid questions. No sleepless
          nights. Have confidence in your crypto.
        </p>
        <div className={styles["trade-section-video"]}>
          <video
            autoPlay
            loop
            muted
            src={"/videos/evolution.webm"}
            className={styles["trade-video"]}
          />
        </div>
      </div>
      <div className={`${styles["section"]} ${styles["about-section"]}`}>
        <div className={styles["about-section-text-content"]}>
          <div className={styles["about-section-headers"]}>
            <SectionHeader header={"What is OKX?"} thinner={true} />
            <p className={styles["about-description"]}>
              Find out why we’re your new favorite crypto app with some help
              from our world-class partners
            </p>
          </div>
          <div className={styles["about-button-and-logo"]}>
            <Button
              type={"about-section"}
              content={"Find out"}
              specialClass={"about-section-button"}
            />
            <div className={styles["company-logo-wide-wrapper"]}>
              <Image
                src={"/images/companyLogos/company-logo-wide.webp"}
                fill
                alt="OKX company logo"
              />
            </div>
          </div>
        </div>
        <div className={styles["about-section-video-content"]}>
          <div className={styles["video-container"]}>
            <div className={styles["video-information"]}>
              <p className={styles["main"]}>Coach Pep Guardiola</p>
              <p className={styles["secondary"]}>
                Explains "crazy football formation"
              </p>
            </div>
            <video
              className={styles["about-video"]}
              autoPlay={false}
              controls
              playsInline
              src={"/videos/about-video-1.mp4"}
            />
          </div>
          <div className={styles["video-container"]}>
            <div className={styles["video-information"]}>
              <p className={styles["main"]}>F1 driver Daniel Ricciardo</p>
              <p className={styles["secondary"]}>Asks if OKX is a race car</p>
            </div>
            <video
              className={styles["about-video"]}
              autoPlay={false}
              controls
              playsInline
              src={"/videos/about-video-2.mp4"}
            />
          </div>
          <div className={styles["video-container"]}>
            <div className={styles["video-information"]}>
              <p className={styles["main"]}>Snowboarder Scotty James</p>
              <p className={styles["secondary"]}>Brings in the whole family</p>
            </div>
            <video
              className={styles["about-video"]}
              autoPlay={false}
              controls
              playsInline
              src={"/videos/about-video-3.mp4"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
