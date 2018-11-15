import React from 'react'
import {NavLink} from 'react-router-dom';

const Book=({book})=> {


return (

   
<div className="card">
 <img className="card-img-top" src={book.image} alt={book.title} />
  <div className="card-body">
    <h5 className="card-title"><NavLink to={"/books/"+book.id}>{book.title}</NavLink></h5>
    <p className="card-text">{book.description.split("",50)}...</p>
  
  </div>
</div>

   
    
)}
 



export default Book;