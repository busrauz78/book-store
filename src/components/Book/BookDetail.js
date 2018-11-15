import React from 'react'
import {connect} from 'react-redux';
import {getProducts} from '../../store/actions/bookaction'
class BookDetail extends React.Component {

componentWillMount(){
   this.props.getProducts()
}
    render(){
        const{book}=this.props

            return (
            <div className="book-detail">
              {book.map(b=>{return ( <div className="card">
 <img className="card-img-top" src={b.image} alt={b.title} />
  <div className="card-body">
    <h5 className="card-title">{b.title}</h5>
    <p className="card-text">{b.description.split("",50)}...</p>
  
  </div>
</div>)
             
})}
            </div>
          )
    }
    
}
const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    const books=state.bookResponse.books;
    const book =books.filter(b=>{
        return b.id===id?b:null
    })
  
    return{
       book:book
    }
}


export default connect(mapStateToProps,{getProducts}) (BookDetail);