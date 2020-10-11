import moxios from 'moxios';
import  { testStore } from  '../../../../Utils';
import { fetchLogements } from '../../actions/logementsActions';

describe('fetchLogements actions', () => {
	beforeEach(() => {
		moxios.install();
	})

	afterEach(() => {
		moxios.uninstall();
	})

	test('store is updated correctly', () =>{
		const expectedState = [{
			id: 1,
			adresse: '5 rue des écoles'
		}, 
		{
			id: 2,
			adresse: '4 avenue Pierre Brossolette'
		}];

		const store = testStore();
		 moxios.wait(()=>{
		 	const request = moxios.requests.mostRecent();
		 	request.respondWith({
		 		status: 200,
		 		response: expectedState
		 	})

		 });
		 return store.dispatch(fetchLogements(1)).then(()=>{
		 	const newState = store.getState();
		 	console.log(newState.logements.logements)
		 	expect(newState.logements.logements).toBe(expectedState);

		 })
	})
})