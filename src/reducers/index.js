import { combineReducers } from 'redux';
import burgerBuilderReducer from './burgerBuilderReducer';
import orderReducer from './orderReducer';
import authReducer from './authReducer';


export default combineReducers({burgerBuilderReducer, orderReducer, authReducer });