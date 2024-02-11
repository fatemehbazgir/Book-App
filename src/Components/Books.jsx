import React, { useState } from "react";

import { books } from "../constants/mockData";
import styles from "./Books.module.css"
import BookCard from "./BookCard";
import SideCard from "./SideCard";

function Books() {
  const [liked, setLiked] = useState([]);

  const handleLikedList = (status, book) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <BookCard
            data={book}
            key={book.id}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.favorites}>
            <h4>Favorites</h4>
          {liked.map((book) => (
            <SideCard key={book.id} data={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
