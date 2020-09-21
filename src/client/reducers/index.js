import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import logementsReducer from './logementsReducer';
import mailReducer from  "./mailReducer";
import availabilityReducer from "./availabilityReducer";
import userReducer from "./userReducer";
import successReducer from './successReducer';
import rentReducer from './rentReducer';
import rendezVousReducer from './rendezVousReducer';
import productReducer from './productReducer';
import cartReducer	from './cartReducer';
import commandeItemReducer from './commandeItemReducer';
import commandeReducer from './commandeReducer';
import simulationReducer from './simulationReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  logements: logementsReducer,
  mail: mailReducer,
  dispo: availabilityReducer,
  user: userReducer,
  success: successReducer,
  rent: rentReducer,
  rendezVous: rendezVousReducer,
  products: productReducer,
  cart: cartReducer,
  commandeItems: commandeItemReducer,
  commande: commandeReducer,
  simulation: simulationReducer
});
