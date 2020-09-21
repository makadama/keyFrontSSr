import axios from 'axios';
import {
	GET_ERRORS, SET_SIMULATION
} from './types';

export const sendLogementInfo = infoTosend => async (dispatch, getState, api) =>{ 
 try{
 const res = await  api.post('/api/sendSimulation', infoTosend)
  
  	console.log(res.data);
  	dispatch({
      type: SET_SIMULATION,
      payload: res.data
    })
  }
  catch(err){
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  }
}


