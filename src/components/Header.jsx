"use client"

import React, { useState, useEffect } from "react"
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
import { AiOutlineCreditCard } from "react-icons/ai"
import { FaPeopleArrows } from "react-icons/fa"
import { AiTwotoneBank } from "react-icons/ai"
import { LuMonitorPause } from "react-icons/lu"
import { BiSolidMedal } from "react-icons/bi"
import { FaMoneyBillWaveAlt } from "react-icons/fa"
import { SiConvertio } from "react-icons/si"
import { TbBusinessplan } from "react-icons/tb"
import { BsCurrencyExchange } from "react-icons/bs"
import { LiaRobotSolid } from "react-icons/lia"
import { SiCoinmarketcap } from "react-icons/si"
import { SiFuturelearn } from "react-icons/si"
import { FaHandHolding } from "react-icons/fa"
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { GiWorld } from "react-icons/gi"
import { GiCrossedChains } from "react-icons/gi"
import { CgPerformance } from "react-icons/cg"
import { FaLaptopCode } from "react-icons/fa"
import { SiVisualstudiocode } from "react-icons/si"
import { PiFileCode } from "react-icons/pi"
import { FaFaucet } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { SiHackaday } from "react-icons/si"
import { IoMdApps } from "react-icons/io"
import { BiTransfer } from "react-icons/bi"
import { PiSwapFill } from "react-icons/pi"
import { BiCoinStack } from "react-icons/bi"
import { BsSafe2Fill } from "react-icons/bs"
import { SiOracle } from "react-icons/si"
import { FaGasPump } from "react-icons/fa"
import { BsGraphUp } from "react-icons/bs"
import { FaUserTie } from "react-icons/fa"
import { GrChannel } from "react-icons/gr"
import { ImHome } from "react-icons/im"
import { TbMobiledata } from "react-icons/tb"
import { RiVipCrownFill } from "react-icons/ri"
import { FaMoneyCheckAlt } from "react-icons/fa"
import { MdAccountTree } from "react-icons/md"
import { MdPool } from "react-icons/md"
import { AiTwotoneSecurityScan } from "react-icons/ai"
import { GrStatusGood } from "react-icons/gr"
import { VscReferences } from "react-icons/vsc"
import { GrOverview } from "react-icons/gr"
import SearchBarDropdownMenu from "./SearchBarDropdownMenu"
import styles from "../styles/componentStyles/header.module.css"

export default function Header() {
  const [sideMenuOpen, setSideMenuOpen] = useState(false)
  const [searchBarDropdownOpen, setSearchBarDropdownOpen] = useState(false)

  const navigationItems = [
    {
      id: uuidv4(),
      header: "Buy crypto",
      dropdownContent: [
        {
          icon: <AiOutlineCreditCard />,
          primaryHeader: "Express buy",
          secondaryHeader: "Visa, Mastercard and others",
        },
        {
          icon: <FaPeopleArrows />,
          primaryHeader: "P2P trading",
          secondaryHeader: "Buy/Sell with 0 fees via 100+ payment methods",
        },
        {
          icon: <AiTwotoneBank />,
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
          icon: <LuMonitorPause />,

          primaryHeader: "Markets",
          secondaryHeader: "View the latest crypto prices, volume, and data",
        },
        {
          icon: <BiSolidMedal />,

          primaryHeader: "Opportunities",
          secondaryHeader: "Discover hot and new crypto",
        },
        {
          icon: <FaMoneyBillWaveAlt />,

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
          icon: <SiConvertio />,

          primaryHeader: "Convert",
          secondaryHeader: "Quick conversion, zero fees, no slippage",
        },
        {
          icon: <TbBusinessplan />,

          primaryHeader: "Basic trading",
          secondaryHeader: "Crypto trading made easy",
          list: ["Spot", "Simple options"],
        },
        {
          icon: <BsCurrencyExchange />,

          primaryHeader: "Delivering & margin trading",
          secondaryHeader:
            "Trade a full range of contracts and margin products",
          list: ["Perpetual swaps", "Futures", "Margin", "Options"],
        },
        {
          icon: <LiaRobotSolid />,

          primaryHeader: "Trading bots",
          secondaryHeader: "Multiple strategies to help you trade with ease",
          list: ["Marketplace", "Create a bot"],
        },
        {
          icon: <FaMoneyBillWaveAlt />,
          primaryHeader: "Copy trading",
          secondaryHeader: "Reap high returns with a community of top traders",
        },
        {
          icon: <SiCoinmarketcap />,

          primaryHeader: "Liquid Marketplace",
          wideSecondary: true,
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
          icon: <SiFuturelearn />,

          primaryHeader: "Earn",
          secondaryHeader: "Don't just HODL earn",
          list: ["Simple earn", "Structured products", "On-chain earn"],
        },
        {
          icon: <FaHandHolding />,

          primaryHeader: "Loan",
          secondaryHeader: "Borrow to earn, borrow to spend",
        },
        {
          icon: <BsFillRocketTakeoffFill />,
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
              icon: <GiWorld />,
              primaryHeader: "Explore",
              secondaryHeader: "Enter the world of Web3",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <GiCrossedChains />,
                  primaryHeader: "OKB Chain",
                  secondaryHeader: "Unleash the power of Web3",
                },
                {
                  icon: <CgPerformance />,
                  primaryHeader: "Testnet Explorer",
                  secondaryHeader: "Explore testnet on-chain data",
                },
              ],
            },
            {
              icon: <FaLaptopCode />,
              primaryHeader: "Developers",
              secondaryHeader: "Expand without limits",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <SiVisualstudiocode />,
                  primaryHeader: "Developer Home",
                  secondaryHeader: "Build on OKBC",
                },
                {
                  icon: <PiFileCode />,
                  primaryHeader: "Developer docs",
                  secondaryHeader: "Explore our protocol documents",
                },
                {
                  icon: <FaFaucet />,
                  primaryHeader: "Testnet faucet",
                  secondaryHeader: "Get OKB on testnet",
                },
                {
                  icon: <BsGithub />,
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
              icon: <GiWorld />,
              primaryHeader: "Explore",
              secondaryHeader: "EVM & IBC compatible network",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <GiCrossedChains />,
                  primaryHeader: "OKT Chain",
                  secondaryHeader: "Decentralized layer 1 network",
                },
                {
                  icon: <SiHackaday />,
                  primaryHeader: "OKX hackathon",
                  secondaryHeader: "Code your way to win",
                },
                {
                  icon: <CgPerformance />,
                  primaryHeader: "Mainnet explorer",
                  secondaryHeader: "Explore mainnet on-chain data",
                },
                {
                  icon: <CgPerformance />,
                  primaryHeader: "Testnet explorer",
                  secondaryHeader: "Explore testnet on-chain data",
                },
              ],
            },
            {
              icon: <IoMdApps />,
              primaryHeader: "Official DApps",
              secondaryHeader: "Infrastructure products",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <BiTransfer />,

                  primaryHeader: "IBC Transfer",
                  secondaryHeader: "Transfer across Cosmos",
                },
                {
                  icon: <PiSwapFill />,
                  primaryHeader: "Swap",
                  secondaryHeader: "Swap tokens on OKT Chain",
                },
                {
                  icon: <BiCoinStack />,
                  primaryHeader: "Liquid Stacking",
                  secondaryHeader: "Stake OKT to get stOKT",
                },
                {
                  icon: <BsSafe2Fill />,
                  primaryHeader: "Multisig safe",
                  secondaryHeader: "Multisig safe or digital assets",
                },
              ],
            },
            {
              icon: <FaLaptopCode />,
              primaryHeader: "Developers",
              secondaryHeader: "Build the future",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <SiOracle />,
                  primaryHeader: "Oracle",
                  secondaryHeader: "Get price data",
                },
                {
                  icon: <FaGasPump />,
                  primaryHeader: "Gas back",
                  secondaryHeader: "Get gas back in OKT",
                },
                {
                  icon: <BsGraphUp />,
                  primaryHeader: "Subgraph",
                  secondaryHeader: "Index & query on-chain data",
                },
                {
                  icon: <BsGithub />,
                  primaryHeader: "GitHub",
                  secondaryHeader: "Explore OKT Chain repositories",
                },
                {
                  icon: <FaFaucet />,
                  primaryHeader: "Testnet faucet",
                  secondaryHeader: "Get OKT on testnet",
                },
                {
                  icon: <PiFileCode />,
                  primaryHeader: "Developer docs",
                  secondaryHeader: "Explore our protocol document",
                },
              ],
            },
            {
              icon: <FaUserTie />,
              primaryHeader: "User community",
              secondaryHeader: "Embrace the journey",
              isExpandable: true,
              expandableContent: [
                {
                  icon: <GrChannel />,
                  primaryHeader: "Galxe channel",
                  secondaryHeader: "Premier Web3 data network",
                },
                {
                  icon: <GrChannel />,
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
          icon: <ImHome />,
          primaryHeader: "Institutional home",
          secondaryHeader:
            "The world’s most powerful suite of crypto trading solutions",
        },
        {
          icon: <SiCoinmarketcap />,
          primaryHeader: "Liquid Marketplace",
          secondaryHeader:
            "OTC liquidity network for pro and institutional traders",
        },
        {
          icon: <TbMobiledata />,
          primaryHeader: "APIs",
          secondaryHeader: "Seamless and ultra-low latency API connectivity​",
        },
        {
          icon: <RiVipCrownFill />,
          primaryHeader: "VIP Loan",
          secondaryHeader: "Improve capital efficiency and lower risk​",
        },
        {
          icon: <FaMoneyCheckAlt />,
          primaryHeader: "Broker Program",
          secondaryHeader:
            "Access world-class market depth with high commissions​",
        },
        {
          icon: <MdAccountTree />,
          primaryHeader: "Managed Trading Sub-accounts",
          wideSecondary: true,
          secondaryHeader:
            "Manage sub-accounts, trade easily and safely with more profits​",
        },
        {
          icon: <SiCoinmarketcap />,
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
              icon: <MdPool />,
              primaryHeader: "Pool",
            },
            {
              icon: <FaMoneyBillWaveAlt />,
              primaryHeader: "OKB",
            },
            {
              icon: <AiTwotoneSecurityScan />,
              primaryHeader: "Security of funds",
            },
            {
              icon: <GrStatusGood />,
              primaryHeader: "Status",
            },
            {
              icon: <BiCoinStack />,
              primaryHeader: "Proof of reserves",
            },
          ],
        },
        {
          listHeader: "Others",
          items: [
            {
              icon: <VscReferences />,
              primaryHeader: "Referral",
            },
            {
              icon: <GiCrossedChains />,
              primaryHeader: "Affiliates",
            },
            {
              icon: <BiAbacus />,
              primaryHeader: "OKX Ventures",
            },
            {
              icon: <GiCrossedChains />,
              primaryHeader: "Blockchain Explorer",
            },
            {
              icon: <GrOverview />,
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

  function handleSearchBarDropdownClick(e) {
    if (e.target.matches("svg")) {
      setSearchBarDropdownOpen(!searchBarDropdownOpen)
    }
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
          <div
            onClick={handleSearchBarDropdownClick}
            className={styles["search"]}
          >
            <BiSearchAlt2 />
            <SearchBarDropdownMenu
              searchBarDropdownOpen={searchBarDropdownOpen}
              setSearchBarDropdownOpen={setSearchBarDropdownOpen}
            />
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
