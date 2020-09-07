import {FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE, GET_ONE_PRODUCT} from '../actions/types';

const initialState =  {items:[], item:{}, filteredItems:[], size:"", sort:""};
export default function(state= initialState, action){
	switch(action.type){
		case FETCH_PRODUCTS:
			return {...state, items: action.payload, filteredItems: action.payload}
		case ORDER_PRODUCTS_BY_PRICE:
			return{ ...state, filteredItems: action.payload.items,
				sort: action.payload.sort};
		case  GET_ONE_PRODUCT:
			return{ ...state, item: action.payload}
		default:
			return state;
	}

} 