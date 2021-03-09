import {  GET_ONE_RENT, GET_RENTS , UPDATE_RENT, GET_ERRORS} from '../actions/types';
import {getLogementById} from '../actions/logementsActions' 

export const getRentByUser = voyageurId => async(dispatch, getState, api) => {
  try{
    var taille=0;
    const res= await api.get(`/api/annonces/${voyageurId}`);
    taille= res.data.length;
    dispatch({
      type:GET_ONE_RENT,
      payload: res.data[taille-1]
    })
    dispatch(getLogementById(res.data[taille-1].fk_logement));
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
 
};



