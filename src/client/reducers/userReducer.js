import {  GET_USER , UPDATE_USER} from '../actions/types';

export default (state = {}, action )=> {
	switch (action.type){
		case GET_USER:
			return action.payload;
		case UPDATE_USER:
			return new(action.payload);
		default:
			return state;
	}
}