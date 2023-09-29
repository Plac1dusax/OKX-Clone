"use client"

import React, { useState, useEffect } from "react"
import { BiSearchAlt2 } from "react-icons/bi"
import popularSearches from "../data/popularSearches.json"
import Coin from "./Coin"
import styles from "../styles/componentStyles/searchBarDropdown.module.css"

export default function SearchBarDropdownMenu({
  searchBarDropdownOpen,
  setSearchBarDropdownOpen,
}) {
  const [searchedItems, setSearchedItems] = useState(popularSearches)
  const [search, setSearch] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    const searchInput = search.split(" ").join("").toLocaleLowerCase()
    const query = popularSearches.filter((item) => {
      return item.name.toLowerCase().includes(searchInput)
    })

    if (query.length === 0 && searchInput != "") {
      setSearchedItems([])
      setError(true)
    } else if (query.length === 0) {
      setSearchedItems(popularSearches)
      setError(false)
    } else {
      setSearchedItems(query)
      setError(false)
    }
  }, [search])

  function handleCancelButton() {
    setSearchBarDropdownOpen(false)
  }

  return (
    <div
      className={`${styles["search-dropdown-container"]} ${
        searchBarDropdownOpen ? styles["open"] : null
      }`}
    >
      <div className={styles["search-dropdown-header"]}>
        <input
          type="text"
          className={styles["dropdown-search-input"]}
          placeholder={"Search crypto, products"}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
          }}
        />
        <BiSearchAlt2 />
      </div>
      <div className={styles["search-dropdown-header-mini"]}>
        <div className={styles["input-wrapper"]}>
          <input
            type="text"
            className={styles["dropdown-search-input"]}
            placeholder={"Search crypto, products"}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
          <BiSearchAlt2 />
        </div>
        <div onClick={handleCancelButton} className={styles["cancel-button"]}>
          Cancel
        </div>
      </div>
      <div className={styles["popular-list"]}>
        <div className={styles["popular-searches-header"]}>
          Popular searches
        </div>
        <ul className={styles["list"]}>
          {searchedItems.map((item) => {
            return <Coin key={item.id} {...item} />
          })}
          {error ? <div className={styles["error"]}>Invalid name</div> : null}
        </ul>
      </div>
    </div>
  )
}
