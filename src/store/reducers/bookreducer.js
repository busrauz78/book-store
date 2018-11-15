
const INITIAL_STATE = {
    books: [],
};
  
const bookreducer=(state=INITIAL_STATE,action)=> {
switch(action.type){
case 'FETCH_BOOKS':
return {...state,books:action.payload};
case 'FETCH_BOOK':
return {...state,books:action.payload};
default:
return INITIAL_STATE;
  }
}
export default bookreducer;