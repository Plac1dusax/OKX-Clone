"use client"

import React, { useState } from "react"
import Image from "next/image"
import Navigation from "./Navigation"
import { BiSearchAlt2 } from "react-icons/bi"
import { BsDownload } from "react-icons/bs"
import { BsFillBellFill } from "react-icons/bs"
import { BsQuestionCircle } from "react-icons/bs"
import { TfiWorld } from "react-icons/tfi"
import DropdownMenu from "./DropdownMenu"
import { GiHamburgerMenu } from "react-icons/gi"
import SideMenu from "./SideMenu"
import { BiAbacus } from "react-icons/bi"
import { v4 as uuidv4 } from "uuid"
import styles from "../styles/componentStyles/header.module.css"

export default function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)

  const navigationItems = [
    {
      id: uuidv4(),
      header: "Buy crypto",
      dropdownContent: [
        {
          icon: <BiAbacus />,
          primaryHeader: "Express buy",
          secondaryHeader: "Visa, Mastercard and others",
        },
        {
          icon: <BiAbacus />,
          primaryHeader: "P2P trading",
          secondaryHeader: "Buy/Sell with 0 fees via 100+ payment methods",
        },
        {
          icon: <BiAbacus />,
          primaryHeader: "Third-party payment",
          secondaryHeader: "Banxa, Simplex and others",
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Discover",
      dropdownContent: [
        {
          icon: <BiAbacus />,

          primaryHeader: "Markets",
          secondaryHeader: "View the latest crypto prices, volume, and data",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Opportunities",
          secondaryHeader: "Discover hot and new crypto",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Copy trading",
          secondaryHeader: "Reap high returns with a community of top traders",
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Trade",
      dropdownContent: [
        {
          icon: <BiAbacus />,

          primaryHeader: "Convert",
          secondaryHeader: "Quick conversion, zero fees, no slippage",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Basic trading",
          secondaryHeader: "Crypto trading made easy",
          list: ["Spot", "Simple options"],
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Delivering & margin trading",
          secondaryHeader:
            "Trade a full range of contracts and margin products",
          list: ["Perpetual swaps", "Futures", "Margin", "Options"],
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Trading bots",
          secondaryHeader: "Multiple strategies to help you trade with ease",
          list: ["Marketplace", "Create a bot"],
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Copy trading",
          secondaryHeader: "Reap high returns with a community of top traders",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Liquid Marketplace",
          secondaryHeader:
            "Deep liquidity on futures spreads, custom multi-leg strategies, and block trades",
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Grow",
      dropdownContent: [
        {
          icon: <BiAbacus />,

          primaryHeader: "Earn",
          secondaryHeader: "Don't just HODL earn",
          list: ["Simple earn", "Structured products", "On-chain earn"],
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Loan",
          secondaryHeader: "Borrow to earn, borrow to spend",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Jumpstart",
          secondaryHeader:
            "Discover new, high-quality projects around the world",
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Build",
      menuType: "common-group",
      dropdownContent: [
        {
          commonGroupHeader: "OKB Chain",
          groupItems: [
            {
              icon: <BiAbacus />,

              primaryHeader: "Explore",
              secondaryHeader: "Enter the world of Web3",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "OKB Chain",
                  secondaryHeader: "Unleash the power of Web3",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Testnet Explorer",
                  secondaryHeader: "Explore testnet on-chain data",
                },
              ],
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Developers",
              secondaryHeader: "Expand without limits",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Developer Home",
                  secondaryHeader: "Build on OKBC",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Developer docs",
                  secondaryHeader: "Explore our protocol documents",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Testnet faucet",
                  secondaryHeader: "Get OKB on testnet",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "GitHub",
                  secondaryHeader: "Explore OKB Chain repositories",
                },
              ],
            },
          ],
        },
        {
          commonGroupHeader: "OKT Chain",
          groupItems: [
            {
              icon: <BiAbacus />,

              primaryHeader: "Explore",
              secondaryHeader: "EVM & IBC compatible network",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "OKT Chain",
                  secondaryHeader: "Decentralized layer 1 network",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "OKX hackathon",
                  secondaryHeader: "Code your way to win",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Mainnet explorer",
                  secondaryHeader: "Explore mainnet on-chain data",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Testnet explorer",
                  secondaryHeader: "Explore testnet on-chain data",
                },
              ],
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Official DApps",
              secondaryHeader: "Infrastructure products",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "IBC Transfer",
                  secondaryHeader: "Transfer across Cosmos",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Swap",
                  secondaryHeader: "Swap tokens on OKT Chain",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Liquid Stacking",
                  secondaryHeader: "Stake OKT to get stOKT",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Multisig safe",
                  secondaryHeader: "Multisig safe or digital assets",
                },
              ],
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Developers",
              secondaryHeader: "Build the future",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Oracle",
                  secondaryHeader: "Get price data",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Gas back",
                  secondaryHeader: "Get gas back in OKT",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Subgraph",
                  secondaryHeader: "Index & query on-chain data",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "GitHub",
                  secondaryHeader: "Explore OKT Chain repositories",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Testnet faucet",
                  secondaryHeader: "Get OKT on testnet",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Developer docs",
                  secondaryHeader: "Explore our protocol document",
                },
              ],
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "User community",
              secondaryHeader: "Embrace the journey",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiAbacus />,

                  primaryHeader: "Galxe channel",
                  secondaryHeader: "Premier Web3 data network",
                },
                {
                  icon: <BiAbacus />,

                  primaryHeader: "QuestN channel",
                  secondaryHeader: "Bridging Web3 users",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Institutional",
      dropdownContent: [
        {
          icon: <BiAbacus />,

          primaryHeader: "Institutional home",
          secondaryHeader:
            "The world’s most powerful suite of crypto trading solutions",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Liquid Marketplace",
          secondaryHeader:
            "OTC liquidity network for pro and institutional traders",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "APIs",
          secondaryHeader: "Seamless and ultra-low latency API connectivity​",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "VIP Loan",
          secondaryHeader: "Improve capital efficiency and lower risk​",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Broker Program",
          secondaryHeader:
            "Access world-class market depth with high commissions​",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Managed Trading Sub-accounts",
          secondaryHeader:
            "Manage sub-accounts, trade easily and safely with more profits​",
        },
        {
          icon: <BiAbacus />,

          primaryHeader: "Historical market data",
          secondaryHeader:
            "Candlesticks, aggregate trades, order book data and more",
        },
      ],
    },
    {
      id: uuidv4(),
      header: "Learn",
      menuType: "none",
      dropdownContent: false,
    },
    {
      id: uuidv4(),
      header: "More",
      menuType: "separate-list",
      dropdownContent: [
        {
          listHeader: "Products",
          items: [
            {
              icon: <BiAbacus />,

              primaryHeader: "Pool",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "OKB",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Security of funds",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Status",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Proof of reserves",
            },
          ],
        },
        {
          listHeader: "Others",
          items: [
            {
              icon: <BiAbacus />,

              primaryHeader: "Referral",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Affiliates",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "OKX Ventures",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Blockchain Explorer",
            },
            {
              icon: <BiAbacus />,

              primaryHeader: "Trade on TradingView",
            },
          ],
        },
      ],
    },
  ]

  function handleSideMenuClick() {
    setSideMenuOpen(true)
  }

  return (
    <>
      <header className={styles["header-container"]}>
        <div className={styles["navigation-section"]}>
          <div className={styles["company-logo-and-mode"]}>
            <div className={styles["company-logo"]}>
              <a href="#" className={styles.company_logo_link}>
                <Image
                  src={"/images/companyLogos/okx-logo-nav.png"}
                  alt="Company logo of OKX"
                  width={82}
                  height={36}
                />
              </a>
            </div>
            <div className={styles["mode-buttons"]}>
              <a
                className={`${styles["mode-button"]} ${styles["exchange"]} ${styles["active"]}`}
                href="#"
              >
                Exchange
              </a>
              <a
                className={`${styles["mode-button"]} ${styles["wallet"]}`}
                href="#"
              >
                Wallet
              </a>
            </div>
          </div>
          <div className={styles["header-split"]} />
          <Navigation navigationItems={navigationItems} />
        </div>
        <div className={styles["user-section"]}>
          <div className={styles["search"]}>
            <BiSearchAlt2 />
          </div>
          <div className={styles["search-input"]}>
            <input type="text" placeholder="Search crypto, products" />
            <div className={styles["search-icon"]}>
              <BiSearchAlt2 />
            </div>
          </div>
          <div className={styles["login-section"]}>
            <a className={styles["login"]} href="#">
              Log in
            </a>
            <a className={styles["sign-up"]}>Sign up</a>
          </div>
          <div
            className={`${styles["header-split"]} ${styles["header-split-right"]}`}
          />
          <div
            onClick={handleSideMenuClick}
            className={styles["hamburger-menu"]}
          >
            <GiHamburgerMenu />
          </div>
          <ul className={styles["options"]}>
            <li className={`${styles["option"]} ${styles["option-barcode"]}`}>
              <BsDownload />
              <div className={styles["option-dropdown-container"]}>
                <DropdownMenu menuType={"download-app"} />
              </div>
            </li>
            <li className={styles["option"]}>
              <BsFillBellFill />
              <div className={styles["option-dropdown-container"]}>
                <DropdownMenu menuType={"notifications"} />
              </div>
            </li>
            <li className={styles["option"]}>
              <BsQuestionCircle />
              <div className={styles["option-dropdown-container"]}>
                <DropdownMenu menuType={"contact"} />
              </div>
            </li>
            <li className={styles["option"]}>
              <TfiWorld />
            </li>
          </ul>
        </div>
      </header>
      <SideMenu
        navigationItems={navigationItems}
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
      />
    </>
  )
}
