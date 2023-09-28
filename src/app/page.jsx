import React from "react"
import Image from "next/image"
import Header from "@/components/Header"
import SectionHeader from "@/components/SectionHeader"
import Button from "@/components/Button"
import sponsor from "../data/sponsor.json"
import AppAdvertisement from "@/components/AppAdvertisement"
import { v4 as uuidv4 } from "uuid"
import Question from "@/components/Question"
import CustomSelectBox from "@/components/CustomSelectBox"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  const fAQ = [
    {
      id: uuidv4(),
      question: <p>What products does OKX provide?</p>,
      answer: (
        <>
          <p>
            OKX is an innovative cryptocurrency exchange with advanced financial
            offerings. We offer cutting-edge crypto trading and earning services
            to millions of users globally in more than 180 regions.
          </p>
          <p>With OKX, you can:</p>
        </>
      ),
      answerList: [
        <li>
          <a href="#" className={styles["link"]}>
            Trade hundreds of tokens and trading pairs
          </a>{" "}
          on spot, margin and derivatives markets.
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Manage your DeFi portfolio
          </a>{" "}
          by connecting your Web3 wallet to organize all your decentralized
          assets in one place.
        </li>,
        <li>
          Create, buy and sell NFTs on our{" "}
          <a href="#" className={styles["link"]}>
            NFT Marketplace.
          </a>
        </li>,
        <li>
          Discover top{" "}
          <a href="#" className={styles["link"]}>
            decentralized
          </a>{" "}
          applications, including DeFi and blockchain gaming DApps.
        </li>,
        <li>
          Connect to DeFi with our Web3 wallet via{" "}
          <a href="#" className={styles["link"]}>
            our App
          </a>{" "}
          or browser extension.
        </li>,
        <li>
          Earn crypto in our{" "}
          <a href="#" className={styles["link"]}>
            mining pools
          </a>
          , take out{" "}
          <a href="#" className={styles["link"]}>
            crypto collateralized loans
          </a>
          , and discover other ways to{" "}
          <a href="#" className={styles["link"]}>
            grow your crypto with OKX Earn.
          </a>
        </li>,
        <li>
          Connect to the world-famous{" "}
          <a href="#" className={styles["link"]}>
            TradingView Platform
          </a>{" "}
          and trade crypto directly with their supercharged charts.
        </li>,
      ],
    },
    {
      id: uuidv4(),
      question: <p>How do I buy Bitcoin on OKX?</p>,
      answer: (
        <p>
          Easily{" "}
          <a href="#" className={styles["link"]}>
            buy Bitcoin
          </a>{" "}
          within minutes with GBP, EUR, USD or your local currency. OKX supports
          various popular payment methods, including Visa, Mastercard, and
          ApplePay credit cards.To get started, check out our{" "}
          <a href="#" className={styles["link"]}>
            latest guide
          </a>{" "}
          on how to buy Bitcoin on OKX. Want to buy, sell, or hold other coins
          that are gaining traction in the crypto ecosystem? Check out the
          following free resources to kick-start your journey today:
        </p>
      ),
      answerList: [
        <li>
          <a href="#" className={styles["link"]}>
            Buy BTC
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy USDT
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy ETH
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy DOT
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy SOL
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy Doge
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy XRP
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy OKB
          </a>
        </li>,
        <li>
          <a href="#" className={styles["link"]}>
            Buy BCH
          </a>
        </li>,
      ],
    },
    {
      id: uuidv4(),
      question: <p>Where is OKX based?</p>,
      answer: (
        <p>
          Founded in 2017, OKX is a Seychelles-registered cryptocurrency
          exchange that adopts blockchain technology to build the
          next-generation financial ecosystem. We provide the latest trading
          services for hundreds of diverse crypto assets.
        </p>
      ),
    },
    {
      id: uuidv4(),
      question: <p>Can U.S. citizens use OKX?</p>,
      answer: (
        <>
          <p>
            OKX is not able to serve customers in the United States. Our
            platform is available globally, except in the following
            jurisdictions: the United States, Singapore, Cuba, Iran, North
            Korea, Crimea, Malaysia, Syria, Canada, the United Kingdom
            (specifically regarding our derivatives-related services for retail
            users), Bangladesh, Bolivia, Malta, and Hong Kong (specifically
            regarding our derivatives-related services for retail users).
          </p>
          <p>
            View our <a className={styles["strong"]}>terms of service</a> for
            the full details.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className={styles["homepage-container"]}>
      <Header />
      <div className={`${styles["section"]} ${styles["main-section"]}`}>
        <div className={styles["header-and-sponsor"]}>
          <SectionHeader
            header={"Faster, better, linker than your average crypto exchange"}
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
      <div className={`${styles["section"]} ${styles["faq-section"]}`}>
        <SectionHeader header={"Got questions?"} thinner={true} />
        <div className={styles["questions-container"]}>
          {fAQ.map((question) => {
            return (
              <Question
                key={question.id}
                question={question.question}
                answer={question.answer}
                answerList={question.answerList}
              />
            )
          })}
        </div>
      </div>
      <footer className={`${styles["section"]} ${styles["footer-section"]}`}>
        <div className={styles["footer-content"]}>
          <div className={styles["company-logo-wrapper"]}>
            <div className={styles["company-logo"]}>
              <Image
                src={"/images/companyLogos/okx-logo-nav.png"}
                fill
                alt="OKX company logo"
              />
            </div>
            <div className={styles["date"]}>©2023 OKX.COM</div>
          </div>
          <div className={styles["select-box-container"]}>
            <CustomSelectBox />
          </div>
        </div>
      </footer>
    </div>
  )
}
