import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import patientsReducer from './patientsReducer'

export default combineReducers({
   errorReducer:errorReducer,
   patients:patientsReducer
});