
import { ADD_COMMANDE, GET_COMMANDES, UPDATE_COMMANDE, DELETE_COMMANDE, GET_ONE_COMMANDE, GET_ERRORS} from './types.js';


export const getOneCommande = (commandeId) => async (dispatch, getState, api) =>{
	try{
		const res = await api.get(`/api/commande/${commandeId}`);
		dispatch({
		type : GET_ONE_COMMANDE,
		payload: res.data
	});

	}catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: err
      })
	}	
};


export const createCommande = (commandeData, history) => async (dispatch, getState, api) => {
try {
    // fetch data from a url endpoint
    const res = await api.post("/api/commandes", commandeData);

   history.push(`/dashboardVoyageur/${res.data.fk_voyageur}/commande/${res.data.id}/mode-paiement`)
  } catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};




export const updateCommande = (commandeId, commandeData) => async(dispatch, getState, api)=>{
 try{
  
 const res= await api.put(`/api/commande/${commandeId}`, commandeData)
   
    dispatch(getOneCommande(res.data.fk_voyageur));

  }catch(err){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
    
   
}

export const updateByPay = (commandeId,  someData, history) => async(dispatch, getState, api)=>{
  try{
  
  const res = await api.get(`/api/commande/${commandeId}`);
  const newCommandeData ={
      adresse: res.data.adresse,
      codePostal: res.data.codePostal,
      nom: res.data.nom,
      email: res.data.email,
      numero: res.data.numero,
      ville: res.data.ville,
      modePaiement: someData.modePaiement,
      taxe: res.data.taxe,
      isPaid: res.data.isPaid,
      paidAt: res.data.paidAt,
      total : res.data.total,
      fk_voyageur : res.data.fk_voyageur
  }
 dispatch(updateCommande(commandeId, newCommandeData));
history.push(`/dashboardVoyageur/${res.data.fk_voyageur}/commande/${commandeId}/details`)
  }catch(err){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}


export const updateByTotal = (commandeId,  someData) => async(dispatch, getState, api)=>{
  try{
  
  const res = await api.get(`/api/commande/${commandeId}`);
  const newCommandeData ={
      adresse: res.data.adresse,
      codePostal: res.data.codePostal,
      nom: res.data.nom,
      email: res.data.email,
      numero: res.data.numero,
      ville: res.data.ville,
      modePaiement: res.data.modePaiement,
      taxe: res.data.taxe,
      isPaid: res.data.isPaid,
      paidAt: res.data.paidAt,
      total : someData,
      fk_voyageur : res.data.fk_voyageur
  }
 dispatch(updateCommande(commandeId, newCommandeData));

  }catch(err){
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}




