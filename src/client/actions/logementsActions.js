import axios from 'axios';
import { FETCH_LOGEMENTS, GET_ERRORS} from './types.js';
import { tokenConfig } from './authActions';

export const fetchLogements = () => async (dispatch, getState, api) =>{
	try{
		const res = await api.get('/api/logements');
		dispatch({
		type : FETCH_LOGEMENTS,
		payload: res
	});
	}catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: err
      })
	}
	

	
};
  	


