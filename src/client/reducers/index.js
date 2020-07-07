import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import logementsReducer from './logementsReducer';
import mailReducer from  "./mailReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  logements: logementsReducer,
  mail: mailReducer
});
