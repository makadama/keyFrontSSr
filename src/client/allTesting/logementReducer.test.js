import { FETCH_LOGEMENTS } from '../actions/types';
import logementsReducer from '../reducers/logementsReducer';


describe('Testing logement Reducer', ()=>{
	it(' should return default state of logementsReducer', ()=>{
		const newState = logementsReducer(undefined, {});
		expect(newState).toEqual({
			logements: [],
  	logement: {},
  	loading: false
		})
	})


	it(' should return a state of logementsReducer', ()=>{
		const biens = {
						logements: [{id:1, adresse: 'allée des astronautes'}, {id:2, adresse: 'avenue du Général Gallieni'}],
					  	logement: {},
					  	loading: false
					   }
		const newState = logementsReducer(undefined, {
			type: FETCH_LOGEMENTS,
			payload: biens.logements
		});
		console.log(newState);
		expect(newState).toEqual(biens)
	})
})