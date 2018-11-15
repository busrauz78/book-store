export const addCart = (book) =>{

    return (dispatch)=>{
        console.log(book);
      dispatch({type:'ADD_BOOK',payload:book})
    }
}