import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

function BookCard({ data }) {
  const { title, image, author, language, pages } = data;

  const [like, setLike] = useState(false);

  const likeHandler = () => {
    setLike((like) => !like);
  };

  return (
    <div>
      <img src={image} alt={title} />

      <div>
        <h3>{title}</h3>
        <p>{author}</p>

        <div>
          <span>{language}</span>
          <span>{pages} Pages</span>
        </div>
      </div>

      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "#e0e0e0"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
