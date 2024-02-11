import React from "react";
import { AiFillHeart } from "react-icons/ai";


function BookCard({ data }) {
  const { title, image, author, language, pages } = data;

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

      <button>
        <AiFillHeart />
      </button>
    </div>
  );
}

export default BookCard;
