import {  GET_ONE_RENDEZVOUS , UPDATE_RENDEZVOUS, ADD_RENDEZVOUS, GET_RENDEZVOUS, DELETE_RENDEZVOUS, FETCH_RENDEZVOUS} from '../actions/types';

const initialState = {
  rdvs: [],
  rdv: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RENDEZVOUS:
      return {
        ...state,
        rdvs: action.payload
       
      }  
    case DELETE_RENDEZVOUS:
      return {
        ...state,
        rdvs: state.rdvs.filter(rdv => rdv.id !== action.payload.id)
      }
    case ADD_RENDEZVOUS:
      return {
          ...state,
         rdvs: [action.payload, ...state.rdvs]
      };
    case UPDATE_RENDEZVOUS:
     return state.rdvs.map(onerdv=> {
        if (onerdv.id === action.payload.id){
          return {
          ...state,
          rdv: action.payload
        }
      } 
        return {
          ...state,
          rdv: onerdv

        }
        
      });

     case  FETCH_RENDEZVOUS:
      const index = state.rdvs.findIndex(onerdv => onerdv.id === action.payload.id);
      if (index > -1) {
        return state.rdvs.map(onerdv => {
          if (onerdv.id === action.payload.id){
            return {
              ...state, 
              rdv: action.payload
            }

          } 
          return {
            ...state,
            rdv: onerdv
          }
      }) }else {
        return {
          ...state,
         rdvs: [action.payload, ...state.rdvs]
      };
      }
    
    default:
      return state;
  }
}