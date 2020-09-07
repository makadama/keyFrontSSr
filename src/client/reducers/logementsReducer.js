import {  GET_LOGEMENTS , GET_ONE_LOGEMENT , ADD_LOGEMENT ,
 DELETE_LOGEMENT, UPDATE_LOGEMENT ,LOGEMENTS_LOADING , FETCH_LOGEMENTS  } from '../actions/types';

const initialState={
	logements: [],
  	logement: {},
  	loading: false
  	
}

export default (state = initialState, action )=> {
	switch (action.type){
		case FETCH_LOGEMENTS:
			return{
				...state,
				logements: action.payload
			};
		case GET_ONE_LOGEMENT:
			return{
				...state,
				logement: action.payload
			};
		case ADD_LOGEMENT:
			return{
				...state,
				logements: [action.payload, ...state.logements]
			};
		case UPDATE_LOGEMENT:
			return logements.map(oneLogement => {
				if(oneLogement.id === action.payload.id){
					return{
						...state,
						logement: action.payload
					};
				}
				return {
          ...state,
          logement: oneLogement

        }
			});
		default:
			return state;
	}
}