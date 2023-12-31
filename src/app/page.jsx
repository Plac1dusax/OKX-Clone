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
import FooterList from "@/components/FooterList"
import { RiTwitterXFill } from "react-icons/ri"
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { BiLogoTelegram } from "react-icons/bi"
import { ImFacebook2 } from "react-icons/im"
import { BsLinkedin } from "react-icons/bs"
import { FaYoutube } from "react-icons/fa"
import { BsThreeDots } from "react-icons/bs"
import FooterListSmallScreen from "@/components/FooterListSmallScreen"
import DownloadAppNotification from "@/components/DowloadAppNotification"
import LocalesModal from "@/components/LocalesModal"
import styles from "../styles/pageStyles/page.module.css"

export default function Home() {
  const fAQ = [
    {
      id: uuidv4(),
      question: <p>What products does OKX provide?</p>,
      answer: (
        <>
          <p key={uuidv4()}>
            OKX is an innovative cryptocurrency exchange with advanced financial
            offerings. We offer cutting-edge crypto trading and earning services
            to millions of users globally in more than 180 regions.
          </p>
          <p>With OKX, you can:</p>
        </>
      ),
      answerList: [
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Trade hundreds of tokens and trading pairs
          </a>{" "}
          on spot, margin and derivatives markets.
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Manage your DeFi portfolio
          </a>{" "}
          by connecting your Web3 wallet to organize all your decentralized
          assets in one place.
        </li>,
        <li key={uuidv4()}>
          Create, buy and sell NFTs on our{" "}
          <a href="#" className={styles["link"]}>
            NFT Marketplace.
          </a>
        </li>,
        <li key={uuidv4()}>
          Discover top{" "}
          <a href="#" className={styles["link"]}>
            decentralized
          </a>{" "}
          applications, including DeFi and blockchain gaming DApps.
        </li>,
        <li key={uuidv4()}>
          Connect to DeFi with our Web3 wallet via{" "}
          <a href="#" className={styles["link"]}>
            our App
          </a>{" "}
          or browser extension.
        </li>,
        <li key={uuidv4()}>
          Earn crypto in our{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
            mining pools
          </a>
          , take out{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
            crypto collateralized loans
          </a>
          , and discover other ways to{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
            grow your crypto with OKX Earn.
          </a>
        </li>,
        <li key={uuidv4()}>
          Connect to the world-famous{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
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
        <p key={uuidv4()}>
          Easily{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
            buy Bitcoin
          </a>{" "}
          within minutes with GBP, EUR, USD or your local currency. OKX supports
          various popular payment methods, including Visa, Mastercard, and
          ApplePay credit cards.To get started, check out our{" "}
          <a key={uuidv4()} href="#" className={styles["link"]}>
            latest guide
          </a>{" "}
          on how to buy Bitcoin on OKX. Want to buy, sell, or hold other coins
          that are gaining traction in the crypto ecosystem? Check out the
          following free resources to kick-start your journey today:
        </p>
      ),
      answerList: [
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy BTC
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy USDT
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy ETH
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy DOT
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy SOL
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy Doge
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy XRP
          </a>
        </li>,
        <li key={uuidv4()}>
          <a href="#" className={styles["link"]}>
            Buy OKB
          </a>
        </li>,
        <li key={uuidv4()}>
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
          <p key={uuidv4()}>
            OKX is not able to serve customers in the United States. Our
            platform is available globally, except in the following
            jurisdictions: the United States, Singapore, Cuba, Iran, North
            Korea, Crimea, Malaysia, Syria, Canada, the United Kingdom
            (specifically regarding our derivatives-related services for retail
            users), Bangladesh, Bolivia, Malta, and Hong Kong (specifically
            regarding our derivatives-related services for retail users).
          </p>
          <p key={uuidv4()}>
            View our <a className={styles["strong"]}>terms of service</a> for
            the full details.
          </p>
        </>
      ),
    },
  ]

  const aboutOKXFooter = {
    header: "More about OKX",
    listArray: [
      "About us",
      "Careers",
      "Contact us",
      "Terms of service",
      "Privacy policy",
      "Disclosures",
      "Whistleblower notice",
      "Law enforcement",
      "OKX app",
    ],
  }

  const productsFooter = {
    header: "Products",
    listArray: [
      "Buy crypto",
      "P2P trading",
      "Convert",
      "Trade",
      "Earn",
      "OKTC",
      "OKX Wallet",
      "Web3 Marketplace",
      "Crypto calculator",
      "Trading bots",
      "All cryptocurrencies",
      "Learn",
      "TradingView",
    ],
  }

  const servicesFooter = {
    header: "Services",
    listArray: [
      "Affiliate",
      "V5 API",
      "Historical market data",
      "Fee schedule",
      "Listing application",
      "P2P Advertiser application",
    ],
  }

  const supportFooter = {
    header: "Support",
    listArray: [
      "Support center",
      "Channel verification",
      "Announcements",
      "Connect with OKX",
    ],
  }

  const buyCryptoFooter = {
    header: "Buy crypto",
    listArray: [
      "Buy USDT",
      "Buy Bitcoin",
      "Buy Ethereum",
      "Buy ADA",
      "Buy Solana",
      "Buy MATIC",
      "Buy Litecoin",
      "Buy XRP",
    ],
  }

  const cryptoCalculatorFooter = {
    header: "Crypto calculator",
    listArray: [
      "BTC to USD",
      "ETH to USD",
      "USDT to USD",
      "SOL to USD",
      "XRP to USD",
    ],
  }

  const tradeFooter = {
    header: "Trade",
    listArray: [
      "BTC USDT",
      "ETH USDT",
      "MATIC USDT",
      "LTC USDT",
      "SOL USDT",
      "XRP USDT",
      "Bitcoin price",
      "Ethereum price",
      "Cardano price",
      "Solana price",
      "XRP price",
    ],
  }

  return (
    <>
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
              {sponsor.map((logo, index) => {
                return (
                  <div
                    key={index}
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
          <div className={styles["sponsor-mobile"]}>
            {sponsor.map((logo, index) => {
              return (
                <div
                  key={index}
                  className={`${styles["sponsor-mobile-logo-container"]} ${
                    styles[`logo-mobile-${logo.id}`]
                  }`}
                >
                  <Image key={logo.id} src={logo.path} alt={logo.alt} fill />
                </div>
              )
            })}
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
              Get the lowest fees, fastest transactions, powerful APIs, and
              more.
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
          <div className={styles["evolution-headers"]}>
            <SectionHeader
              header={"With you every step of the way"}
              thinner={true}
            />
            <p className={styles["description-evolution"]}>
              From your first crypto trade to your first NFT purchase,
              you&apos;ll have us to guide you through the process. No stupid
              questions. No sleepless nights. Have confidence in your crypto.
            </p>
          </div>
          <div className={styles["evolution-headers-mobile"]}>
            <SectionHeader header={"A mode for everyone"} thinner={true} />
            <p className={styles["description-evolution"]}>
              Jump from trading, to DeFi, to NFTs all in one place.
            </p>
          </div>
          <div className={styles["evolution-section-video"]}>
            <video
              autoPlay
              loop
              muted
              src={"/videos/evolution.webm"}
              className={styles["evolution-video"]}
            />
            <Image
              fill
              src={"/videos/evolution-mini.gif"}
              className={styles["evolution-mini-video"]}
              alt={"Evolution gif"}
            />
          </div>
        </div>
        <div className={`${styles["section"]} ${styles["about-section"]}`}>
          <div className={styles["about-section-text-content"]}>
            <div className={styles["about-section-headers-and-button"]}>
              <SectionHeader header={"What is OKX?"} thinner={true} />
              <p className={styles["about-description"]}>
                Find out why we’re your new favorite crypto app with some help
                from our world-class partners
              </p>
              <div className={styles["about-button"]}>
                <Button
                  type={"about-section"}
                  content={"Find out"}
                  specialClass={"about-section-button"}
                />
              </div>
            </div>
            <div className={styles["about-logo"]}>
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
                  Explains &ldquo;crazy football formation&rdquo;
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
                <p className={styles["secondary"]}>
                  Brings in the whole family
                </p>
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
            <div className={styles["footer-lists-container"]}>
              <div className={styles["lists-container"]}>
                <div className={styles["footer-list"]}>
                  <FooterList
                    header={aboutOKXFooter.header}
                    listArray={aboutOKXFooter.listArray}
                  />
                </div>
                <div className={styles["footer-list"]}>
                  <FooterList
                    header={productsFooter.header}
                    listArray={productsFooter.listArray}
                  />
                </div>
                <div
                  className={`${styles["footer-list"]} ${styles["footer-list-double"]}`}
                >
                  <FooterList
                    header={servicesFooter.header}
                    listArray={servicesFooter.listArray}
                  />
                  <FooterList
                    header={supportFooter.header}
                    listArray={supportFooter.listArray}
                    margin={true}
                  />
                </div>
                <div
                  className={`${styles["footer-list"]} ${styles["footer-list-double"]}`}
                >
                  <FooterList
                    header={buyCryptoFooter.header}
                    listArray={buyCryptoFooter.listArray}
                  />
                  <FooterList
                    header={cryptoCalculatorFooter.header}
                    listArray={cryptoCalculatorFooter.listArray}
                    margin={true}
                  />
                </div>
                <div className={styles["footer-list"]}>
                  <FooterList
                    header={tradeFooter.header}
                    listArray={tradeFooter.listArray}
                  />
                </div>
              </div>
              <div className={styles["register"]}>
                <div className={styles["register-title"]}>
                  Trade on the go with OKX
                </div>
                <Button
                  type={"register-section"}
                  content={"Register"}
                  specialClass={"button-register"}
                />
                <div className={styles["barcode-wrapper"]}>
                  <div className={styles["barcode"]}>
                    <Image
                      src={"/images/barcode/barcode.png"}
                      alt="Register barcode"
                      fill
                    />
                  </div>
                  <div className={styles["barcode-description"]}>
                    Scan to download OKX app
                  </div>
                </div>
              </div>
            </div>
            <div className={styles["community"]}>
              <div className={styles["community-header"]}>Community</div>
              <div className={styles["social-media-icons"]}>
                <div className={styles["social-media-icon"]}>
                  <RiTwitterXFill />
                </div>
                <div className={styles["social-media-icon"]}>
                  <FaTiktok />
                </div>
                <div className={styles["social-media-icon"]}>
                  <FaInstagram />
                </div>
                <div className={styles["social-media-icon"]}>
                  <FaDiscord />
                </div>
                <div className={styles["social-media-icon"]}>
                  <BiLogoTelegram />
                </div>
                <div className={styles["social-media-icon"]}>
                  <ImFacebook2 />
                </div>
                <div className={styles["social-media-icon"]}>
                  <BsLinkedin />
                </div>
                <div className={styles["social-media-icon"]}>
                  <FaYoutube />
                </div>
                <div className={styles["social-media-icon"]}>
                  <BsThreeDots />
                </div>
              </div>
            </div>
            <div className={styles["footer-list-small-screen"]}>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={aboutOKXFooter.header}
                  list={aboutOKXFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={productsFooter.header}
                  list={productsFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={servicesFooter.header}
                  list={servicesFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={supportFooter.header}
                  list={supportFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={buyCryptoFooter.header}
                  list={buyCryptoFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={cryptoCalculatorFooter.header}
                  list={cryptoCalculatorFooter.listArray}
                />
              </div>
              <div className={styles["small-footer-list"]}>
                <FooterListSmallScreen
                  header={tradeFooter.header}
                  list={tradeFooter.listArray}
                />
              </div>
            </div>
          </div>
        </footer>
        <div className={styles["mobile-app-download"]}>
          <DownloadAppNotification />
        </div>
      </div>
      <LocalesModal />
    </>
  )
}
