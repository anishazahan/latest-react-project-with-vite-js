import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import SingleBooks from './SingleBooks'
import LoadingSpinner from './LoadingSpinner'

const Books = () => {
    
    const { books } = useLoaderData()
    
    const navigation = useNavigation()
    console.log(navigation.state)
    if (navigation.state === 'loading') {
      return <LoadingSpinner />
    }
    
    // console.log(books)
 
  return (
    <div className='max-w-6xl mx-auto px-10'>
    <div className='grid gap-3 mb-8 lg:grid-cols-4 sm:grid-cols-2'>
      {books.map(book => (
        <SingleBooks key={book.isbn13}  book={book} />
      ))}
    </div>
  </div>
  )
}

export default Books