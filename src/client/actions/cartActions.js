import { ADD_TO_CART, REMOVE_FROM_CART } from './types';
import Cookie from "js-cookie";

export const addToCart =  (items, produit) => (dispatch)=>{
	const cartItems = items.slice();
			let produitAlreadyInCart = false;
			cartItems.forEach(cp=> {
				if(cp.id === produit.id){
					produitAlreadyInCart = true;
					cp.count++;
				}
			});
			if(!produitAlreadyInCart){
				cartItems.push({...produit, count:1});
			}
			  Cookie.set("cartItems", JSON.stringify(cartItems));
			
			return dispatch({
				type: ADD_TO_CART,
				payload:{
					cartItems: cartItems
				}
			});
		
}

export const removeFromCart = (items, produit)=> (dispatch) => {

			const cartItems = items.slice().filter(elm=> elm.id!==produit.id);
			 Cookie.set("cartItems", JSON.stringify(cartItems));
			return dispatch({
				type: REMOVE_FROM_CART,
				payload:{
					cartItems: cartItems
				}
			})
	
}