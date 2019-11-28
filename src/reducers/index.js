import {combineReducers} from 'redux'
import products from './products';
import carts from './carts';
import message from './message';

const appReducers = combineReducers({
    products,
    message,
    carts
})

export default appReducers;