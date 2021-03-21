import React, { useState } from 'react'
import bookData from './bookData'

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
      <h1>The Library is Open!</h1>
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
  const { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription, minimized, handleMinimize } = props
  return (
    <div className={minimized ? 'book book--minimized' : 'book'}>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <a href={url}></a>
      <p>{shortDescription}</p>
      <img src={coverImageUrl} />
      <button onClick={() => handleMinimize(title, !minimized)}> {minimized ? 'More Information' : 'Less Information'}</button>
      <p>{publisher}</p>
      <p>{publicationDate}</p>
      <p>{detailedDescription}</p>

    </div>
  )
}


export default App

// {/* <>
//       <Book
//         title='cool'
//         author='LQ'
//         description='big green guy'
//         image='https://images.newscientist.com/wp-content/uploads/2020/09/22145012/big-frog-eyes.jpg'
//         url=''
//         publisher='kermit'
//         publicationDate='08/11/1993'
//         expandedDescription='lsasdlkfjalska'
//       />
//     </> */}