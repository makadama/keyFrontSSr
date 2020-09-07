import {GET_COMMANDE_ITEM, ADD_COMMANDE_ITEM, UPDATE_COMMANDE_ITEM, DELETE_COMMANDE_ITEM} from '../actions/types';


const initialState = {
  commandeItems: [],
  commandeItem: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COMMANDE_ITEM:
      return {
        ...state,
        commandeItems: action.payload,
        loading: false
      }  
    case DELETE_COMMANDE_ITEM:
      return {
        ...state,
        commandeItems: state.commandeItems.filter(commandeItem => commandeItem.id !== action.payload.id)
      }
    case ADD_COMMANDE_ITEM:
      return {
          ...state,
         commandeItems: [action.payload, ...state.commandeItems]
      };
    case UPDATE_COMMANDE_ITEM:
     return state.commandeItems.map(oneCommandeItem=> {
        if (oneCommandeItem.id === action.payload.id){
          console.log(oneCommandeItem);
          return {
          ...state,
          commandeItem: action.payload
        }
      } 
        return {
          ...state,
          commandeItem: oneCommandeItem
        }
      });
    default:
      return state;
  }
}

