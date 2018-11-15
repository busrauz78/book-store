import React from 'react'
import Book from './Book';



const BookList=({books}) =>{

  return(
  <div>
     {books.map(book => {
     
      return (
      <div className="book" key={book.id}> <Book book={book}   /></div>
        
     
       
       
    
             
         
        )
      })}
  </div>
   
)
}
export default BookList;