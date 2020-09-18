import axios from 'axios';
import { ADD_COMMANDE_ITEM, GET_COMMANDE_ITEM, UPDATE_COMMANDE_ITEM, DELETE_COMMANDE_ITEM, GET_ERRORS} from './types.js';
import { tokenConfig } from './authActions';

export const getCommandeItem = (voyageurId) => async (dispatch, getState, api) =>{
	try{
		const res = await api.get(`/api/commandeItems/${voyageurId}`);
		dispatch({
		type : GET_COMMANDE_ITEM,
		payload: res.data
	});

	}catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: err
      })
	}	
};


export const addCommandeItem = (commandeItemData) => async (dispatch, getState, api) => {
try {
    // fetch data from a url endpoint
    const res = await api.post("/api/commandeItems", commandeItemData);
    dispatch({
    type : ADD_COMMANDE_ITEM,
    payload: res.data
  });
    dispatch(getCommandeItem(res.data.fk_voyageur))
  } catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};


export const deleteCommandeItem = (commandeItemId, userId) => async (dispatch, getState, api)=>{
 try{
    const res = await api.delete(`/api/commandeItem/${commandeItemId}`)
    dispatch({
    type : DELETE_COMMANDE_ITEM,
    payload: res.data
  });
    dispatch(getCommandeItem(userId));
 }
 catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
 }
}


export const updateCommandeItem = (commandeItemId, commandeItemData) => async(dispatch, getState, api)=>{
 try{
  
 const res= await api.put(`/api/commandeItem/${commandeItemId}`, commandeItemData)
    dispatch({
      type: UPDATE_COMMANDE_ITEM,
      payload: res.data
    })
    dispatch(getCommandeItem(res.data.fk_voyageur));

  }catch(err){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
    
   
}






export const updateByQt = (commandeItemId, qt) => async(dispatch, getState, api)=>{
  try{
    const res = await api.get(`/api/commandeItem/${commandeItemId}`);

    if(res){
      const prixfinal = res.data.prixUnitaire * qt;
      const commandeItemData={
        nom: res.data.nom,
        quantite: qt,
        prixUnitaire: res.data.prixUnitaire,
        prix: prixfinal ,
        qtEnStock: res.qtEnStock ,
        image: res.data.image,
        fk_voyageur: res.data.fk_voyageur,
        fk_produit: res.data.fk_produit 
      }
      dispatch(updateCommandeItem(commandeItemId, commandeItemData));
    }
    
  }catch(error){
    console.log('there is an error')
  }
}


