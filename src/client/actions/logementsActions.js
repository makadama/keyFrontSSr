import axios from 'axios';
import { FETCH_LOGEMENTS, ADD_LOGEMENT, GET_ERRORS, GET_ONE_LOGEMENT, UPDATE_LOGEMENT, GET_SUCCESS} from './types.js';
import { tokenConfig } from './authActions';

export const fetchLogements = (userID) => async (dispatch, getState, api) =>{
	try{
		const res = await api.get(`/api/logements/${userID}`);
		dispatch({
		type : FETCH_LOGEMENTS,
		payload: res.data
	});
	}catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: error
      })
	}	
};


export const addLogement = (logementData, history) => async (dispatch, getState, api) => {
try {
    // fetch data from a url endpoint
    const res = await api.post("/api/logements", logementData);
    if(res){
    	const user=logementData.fk_hote;
     history.push(`/dashboardHote/${user}/mes-biens`)
     dispatch({
			type: ADD_LOGEMENT,
			payload: res.data
		})
    }
  } catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};


export const getLogementById = logementId => async (dispatch, getState, api)=>{
	try{
		const res =  await api.get(`/api/logement/${logementId}`);
		dispatch({
			type: GET_ONE_LOGEMENT,
			payload: res.data
		})
	}
	catch(error){
		dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
	}
}

export const updateLogement = (logementId, logementData) => async (dispatch, getState, api) =>{
	try{
		console.log(logementData);
		const res = await  api.put(`/api/logement/${logementId}`, logementData);
		if(res){
		dispatch({
			type: GET_ONE_LOGEMENT,
			payload: res.data
		})
		dispatch(answerSuccessfully());
		}
	}catch(error){
		dispatch({
 		type: GET_ERRORS,
 		payload: error.response.data
 	})
	}
}


export const uploadLogementImage = (logementData) => async (dispatch, getState, api) =>{
	try{
		const res = await  api.post("/api/upload", logementData);
		if(res){
			console.log(res.data);
		}
		

	}catch(error){
		console.log(error);
	}

}

export const answerSuccessfully = () => {
	return {
    type: GET_SUCCESS
  };
}