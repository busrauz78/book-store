import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/bookaction";
import BookList from "../Book/BookList";
import Cart from "../Cart/Cart";

class Dashboard extends Component {
  state = {
    cart: []
  };

  componentDidMount() {
    this.props.getProducts();
  }
  addToCart = book => {
    let newCart = [...this.state.cart, book];

    this.setState({
      cart: newCart
    });

   
  };

  render() {
    const { books } = this.props;

    return (
  

      <div className="dashboard">
        <div className="book-list">
       <BookList books={books} addToCart={this.addToCart} />
        </div>

        <div className="cart">
          {this.state.cart.map(cart => {
            return <ul className="collection"><Cart book={cart} /></ul>;
          })}
        </div>
      </div>
      
    
      
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.bookResponse.books,
 
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
