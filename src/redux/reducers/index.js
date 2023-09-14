import currentUser from './currentUser';
import currentProduct from './currentProduct';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentUser,
    currentProduct,
});

export default rootReducer;