import React from 'react'
import {NavLink} from 'react-router-dom'



const BookList=({books,addToCart}) =>{

  return(
  <div className="book">
     {books.map(book => {
     
      return (
       
        <div className="card" key={book.id}>
     
        <img className="responsive-img img" src={book.image} alt={book.title} />
        <div className="card-content">
        <span className="card-title"><NavLink to={"/books/"+book.id}>{book.title}</NavLink></span>
        <p className="gray-text">By {book.author}</p>
        
       <button className="btn" onClick={()=>addToCart(book)}>Add</button>
        </div>
         
</div>
     

       
       
    
             
         
        )
      })}
  </div>
   
)
}
export default BookList;