import React, { useState } from 'react'
import bookData from './bookData'
import './styles/App.css'

export const App = () => {
  const [newBookData, setnewBookData] = useState(bookData)

  const handleMinimize = (title, minimized) => {
    const secondBookData = newBookData.map((book) => {
      if (book.title === title) {
        return { ...book, minimized }
      }
      return book
    })
    setnewBookData(secondBookData)
  }

  return (
    <div className='book'>
      <h1 className='header'>The Library is Open!</h1>
      {newBookData.map((book, index) => (
        <Book
          title={book.title}
          author={book.author}
          url={book.url}
          shortDescription={book.shortDescription}
          coverImageUrl={book.coverImageUrl}
          publisher={book.publisher}
          publicationDate={book.publicationDate}
          detailedDescription={book.detailedDescription}
          minimized={book.minimized}
          handleMinimize={handleMinimize}
          key={index}
        />
      ))}

    </div>
  )
}

const Book = (props) => {
  const {
    title,
    author,
    url,
    shortDescription,
    coverImageUrl,
    publisher,
    publicationDate,
    detailedDescription,
    minimized,
    handleMinimize
  } = props

  return (
    <div className={minimized ? 'book book--minimized' : 'book'}>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <a href={url}>Learn More</a>
      <p>{shortDescription}</p>
      <img className='image' src={coverImageUrl} />
      <button
        classname='info-btn'
        onClick={() => handleMinimize(title, !minimized)}>
        {minimized ? 'More Information' : 'Less Information'}
      </button>
      {!minimized && (
        <>
          <p>{publisher}</p>
          <p>{publicationDate}</p>
          <p>{detailedDescription}</p>
        </>
      )}
    </div>
  )
}

export default App

// // 
// If this is true   && then do this - continue on to the next expression

// if this is false || do this