import React from "react";

const Cart = ({book}) => {
console.log(book)
  return (
    <li key={book.id} className="collection-item">
      <img src={book.image} alt="" className="cart-img" />
      <span className="title">{book.title}</span>
    </li>
  );
};
export default Cart;
