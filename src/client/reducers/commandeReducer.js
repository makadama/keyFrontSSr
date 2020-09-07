import {  GET_ONE_COMMANDE, GET_COMMANDES} from '../actions/types';

const initialState = {
  commandes: [],
  commande: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMANDES:
      return {
        ...state,
        commandes: action.payload
       
      }  
     case  GET_ONE_COMMANDE:
          return {
            ...state,
            commande: action.payload
          }
    default:
      return state;
  }
}