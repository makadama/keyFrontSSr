import {  GET_ONE_RENT , UPDATE_RENT, GET_RENTS} from '../actions/types';

const initialState = {
  rents: [],
  rent: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RENTS:
      return {
        ...state,
        rents: action.payload
       
      }  
     case  GET_ONE_RENT:
          return {
            ...state,
            rent: action.payload
          }
    default:
      return state;
  }
}