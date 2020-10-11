import{
	GET_ERRORS, GET_USER, UPDATE_USER, GET_SUCCESS
} from './types';


export const getUser = (userId) => async  (dispatch, getState, api) => {
	try{
		const res = await api.get(`/api/user/${userId}`);
		dispatch({
			type: GET_USER,
			payload: res.data
		})
	}catch(err){
		dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
	}

}

export const updateUser= (userId, userData) => async (dispatch, getState, api)=>{
	try{
		console.log(userData);
		const res= await api.put(`/api/user/${userId}`, userData);
		dispatch({
			type: GET_USER,
			payload: res.data
		})
		dispatch(answerSuccessfully());
	}catch(err){
		dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
	}
}


export const answerSuccessfully = () => {
	return {
    type: GET_SUCCESS
  };
}