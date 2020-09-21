import {
	SET_SIMULATION
} from "../actions/types";

const isEmpty = require('is-empty');

const initialState={
	isSent: false,
	simulationInfo: {}
}

export default function(state = initialState, action){
	switch(action.type){
		case SET_SIMULATION:
			return{
				...state,
				isSent: !isEmpty(action.payload),
				simulationInfo: action.payload
			};
			
		default:
			return state;
	}
}