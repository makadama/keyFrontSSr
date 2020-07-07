import jwt_decode from "jwt-decode";

import{
	GET_ERRORS, FETCH_CURRENT_USER
} from './types';


//Register USER
export const registerUser = (userData, history) => async (dispatch, getState, api) => {
try {
    // fetch data from a url endpoint
    const res = await api.post("/api/auth/signup", userData);
    if(res){
     history.push("/loginAfterRegister")
    }
  } catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};


//login USER
//login USER
export const loginUser = (userData, history) => async (dispatch, getState, api) => {
try {
    // fetch data from a url endpoint
    const res = await api.post("/api/auth/signin", userData);
    dispatch(fetchCurrentUser());
  } catch (err) {
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
};



export const logoutUser = (history) => async (dispatch, getState, api) => {
  try{
    const res = await api.get('/api/auth/signout');
  }
  catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
  
}

export const fetchCurrentUser = () => async (dispatch, getState, api) => {
 try{
   const res = await api.get('/api/current_user');
   dispatch({
    type: FETCH_CURRENT_USER,
    payload: res.data
  });
}
 catch(err){
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }
  
};




