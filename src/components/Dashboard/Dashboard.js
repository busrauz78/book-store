import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getProducts} from '../../store/actions/bookaction';
import BookList from '../Book/BookList';

 class Dashboard extends Component {

   componentDidMount(){

       this.props.getProducts();
       
   }
 
  render() {
    
    const {books}=this.props
return (

  <div className="container book-list"><BookList  books={books}  /></div>
    
      
    )
  }
}
const mapStateToProps=(state)=>{

    return{
        books:state.bookResponse.books
    }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getProducts:()=>dispatch(getProducts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);