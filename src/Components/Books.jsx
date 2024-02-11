import React from 'react'

import {books} from "../constants/mockData"
import BookCard from './BookCard'



function Books() {
  return (
    <div>
        <div>
            {books.map((book)=>(
                <BookCard data={book} key={book.id}/>
            ))}
        </div>
        <div></div>
    </div>
  )
}

export default Books