import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRICE, GET_ONE_PRODUCT, GET_ERRORS} from './types';

export const fetchProduits = () => async(dispatch, getState, api) => {
  try{
    const res= await api.get('/api/produits');
    dispatch({
      type: FETCH_PRODUCTS,
      payload: res.data
    })
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err
      })
  }
 
};


export const sortProduits = (items, sort) => (dispatch) => {
	const produits = items.slice();
	if(sort !==''){
		produits.sort((a,b)=>(sort==='lowest')?(a.prix > b.prix?1:-1): (a.prix < b.prix?1:-1))
	}
	else{
		produits.sort((a,b)=> (a.id < b.id?1:-1));
	}
	return dispatch({
		type: ORDER_PRODUCTS_BY_PRICE,
		payload:{
			sort: sort,
			items: produits
		}
	})
}

export const getProduitById = produitId => async (dispatch, getState, api)=>{
	try{
		const res =  await api.get(`/api/produit/${produitId}`);
		dispatch({
			type: GET_ONE_PRODUCT,
			payload: res.data
		})
	}
	catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: error
      })
	}
}
