import {  GET_ONE_RENT, GET_RENTS , UPDATE_RENT, GET_ERRORS} from '../actions/types';
import {getLogementById} from '../actions/logementsActions' 

export const getRentByUser = voyageurId => async(dispatch, getState, api) => {
  try{
    const res= await api.get(`/api/annonces/${voyageurId}`);
    dispatch({
      type:GET_ONE_RENT,
      payload: res.data
    })
    dispatch(getLogementById(res.data.fk_logement));
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
 
};



