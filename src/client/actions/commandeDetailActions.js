import { GET_ERRORS} from './types.js';

export const addCommandeDetail = (commandeData)=> async (dispatch, getState, api)=>{
  try{
    const res= await api.post('/api/commandeDetails', commandeData)
   
  }catch(err){
     dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
}
