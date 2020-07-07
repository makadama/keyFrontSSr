import {  GET_LOGEMENTS , GET_ONE_LOGEMENT , ADD_LOGEMENT ,
 DELETE_LOGEMEN, UPDATE_LOGEMENT ,LOGEMENTS_LOADING , FETCH_LOGEMENTS  } from '../actions/types';



export default (state = [], action )=> {
	switch (action.type){
		case FETCH_LOGEMENTS:
			return action.payload.data || false;
		default:
			return state;
	}
}