import {GET_RENDEZVOUS, ADD_RENDEZVOUS, FETCH_RENDEZVOUS, UPDATE_RENDEZVOUS, DELETE_RENDEZVOUS, GET_ERRORS } from './types';

export const getrdv = voyageurId => async(dispatch, getState, api) => {
  try{
    const res= await api.get(`/api/rendezVouss/${voyageurId}`);
    dispatch({
      type:GET_RENDEZVOUS,
      payload: res.data
    })
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};


export const getOnerdv = rendezVousId => async (dispatch, getState, api) =>{
  try{
    const res = await api.get(`/api/rendezVous/${rendezVousId}`);
    dispatch({
       type:FETCH_RENDEZVOUS,
        payload: res.data
    })
  }catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}

export const updaterdv = (rendezVousId, rdvData) => async(dispatch, getState, api)=>{
 try{
 const res= await api.put(`/api/rendezVous/${rendezVousId}`, rdvData)

    dispatch({
      type:UPDATE_RENDEZVOUS,
      payload: res.data
    })
    dispatch(getrdv(res.data.fk_voyageur));
  }catch(err){
     dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  } 
}

export const deleterdv = (rendezVousId, voyageurId) => async (dispatch, getState, api)=>{
 try{
    const res = await api.delete(`/api/rendezVous/${rendezVousId}`)
    dispatch(getrdv(voyageurId));
 }
 catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
 }
}


export const addrdv = (rdvData)=> async (dispatch, getState, api)=>{
  try{
    const res= await api.post('/api/rendezVous', rdvData)
    dispatch({
      type:ADD_RENDEZVOUS,
      payload: res.data
    })
    dispatch(getrdv(res.data.fk_voyageur));
  }catch(err){
     dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}








