import { IoSearch } from "react-icons/io5";
import styles from "./SearchBox.module.css"
import React from "react";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title..."
        value={search}
        onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default SearchBox;
