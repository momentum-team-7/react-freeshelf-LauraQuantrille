import React from 'react'
import bookData from './bookData'
import { useState } from 'react'



const Book = (props) => {
  const { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
  return (
    <div className='book'>
      <h2>{title}</h2>
      <h2>{author}</h2>
      <a href={url}></a>
      <p>{shortDescription}</p>
      <img src={coverImageUrl} />
      <p>{publisher}</p>
      <p>{publicationDate}</p>
      <p>{detailedDescription}</p>

    </div>
  )
}

export const App = () => {
  // const [bookData] = useState([])
  return (
    <div className='book'>
      <h1>The Library is Open</h1>
      {bookData.map((book, index) => (
        <Book
          title={book.title}
          author={book.author}
          url={book.url}
          shortDescription={book.shortDescription}
          coverImageUrl={book.coverImageUrl}
          publisher={book.publisher}
          publicationDate={book.publicationDate}
          detailedDescription={book.detailedDescription}
          key={index}
        />
      ))}

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