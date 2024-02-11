import React, { useState } from "react";

import { books } from "../constants/mockData";
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
    <div>
      <div>
        {books.map((book) => (
          <BookCard
            data={book}
            key={book.id}
            handleLikedList={handleLikedList}
          />
        ))}
      </div>
      {!!liked.length && <div><SideCard/></div>}
    </div>
  );
}

export default Books;
