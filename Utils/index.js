import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../src/client/reducers';
import thunk from 'redux-thunk';
import axios from 'axios';



export const  findByTestAttr = (component, attr) =>{
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
}

export const checkProps = (component, expectedProps) =>{
	const propsErr = checkPropTypes(component.PropTypes, expectedProps, 'props', component.name);
	return propsErr;
}


export const testStore = (initialState) => {

	const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000'  //ici
  });

     const store = createStore(
    reducers,
   initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));

  return store;
};