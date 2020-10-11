import { GET_AVAILABILITIES, ADD_AVAILABILITY} from '../actions/types';
import availabilityReducer from '../reducers/availabilityReducer';


describe('testing availability Reducer', ()=>{
	it(' should return default state of availabilityReducer', ()=>{
		const newState = availabilityReducer(undefined, {});
		expect(newState).toEqual({
			  dispos: [],
			  dispo: {},
			  loading: false
		})
	})


	it(' should return a state of availabilityReducer', ()=>{
		const disponibilites = {
						dispos: [{id: 1, dateDebut: '10-10-2020', dateFin: '20-10-2020'},{id: 2, dateDebut: '20-10-2020', dateFin: '30-10-2020'}],
						dispo: {},
					  	loading: false
					   }
		const newState = availabilityReducer(undefined, {
			type: GET_AVAILABILITIES,
			payload: disponibilites.dispos
		});
		console.log(newState);
		expect(newState).toEqual(disponibilites)
	})


	it(' should return a state of availabilityReducer', ()=>{
		const disponibilites = {
						dispos: [{id: 1, dateDebut: '10-10-2020', dateFin: '20-10-2020'},{id: 2, dateDebut: '20-10-2020', dateFin: '30-10-2020'}],
						dispo: {},
					  	loading: false
					   }

		const dispoToAdd = {
			id: 3, dateDebut: '10-10-2020', dateFin: '25-10-2020'
		}

		const disponibilitesAfterAdded = {
						dispos: [{id: 3, dateDebut: '10-10-2020', dateFin: '25-10-2020'},{id: 1, dateDebut: '10-10-2020', dateFin: '20-10-2020'},{id: 2, dateDebut: '20-10-2020', dateFin: '30-10-2020'}],
						dispo: {},
					  	loading: false
					   }

		
		const newState = availabilityReducer(undefined, {
			type: GET_AVAILABILITIES,
			payload: disponibilites.dispos
		});
		console.log(newState);
		const newState2 = availabilityReducer(newState, {
			type: ADD_AVAILABILITY,
			payload: dispoToAdd
		});

		console.log(newState2);
		console.log(disponibilitesAfterAdded);
		expect(newState2).toEqual(disponibilitesAfterAdded)
	})

})