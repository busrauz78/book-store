import bookreducer from './bookreducer';

import {combineReducers} from 'redux';


const rootreducer =combineReducers({
    bookResponse:bookreducer,

})
export default rootreducer;