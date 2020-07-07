import axios from 'axios';
import {
	GET_ERRORS, SET_MAIL
} from './types';

export const sendAnMessage = messageTosend => async (dispatch, getState, api) =>{ 
 try{
 const res = await  api.post('/api/sendAnEmail', messageTosend)
  
  	console.log(res.data);
  	dispatch({
      type: SET_MAIL,
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


