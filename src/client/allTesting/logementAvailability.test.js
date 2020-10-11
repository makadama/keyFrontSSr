import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../../Utils';
import  LogementAvailability  from '../pages/OwnerPanel/LogementAvailability';

const setUp= (initialState = {}) => {
	const store = testStore(initialState);
	const Disponibilite = LogementAvailability.component;
	const wrapper = shallow(<Disponibilite store={store}/>).dive();
	return wrapper;
}

describe(' Testing a connected Component: LogementAvailability Page', () =>{
	let wrapper;
	beforeEach(()=>{
		const initialState = {
			dispo:{
				dispos: [{
				id: 1,
				date_debut: '28-01-21',
				date_fin: '28-02-21'
			},
			{
				id: 2,
				date_debut: '15-03-21',
				date_fin: '09-09-21'
			}],
			dispo: {},
			 loading: false
	
		}
	}
		wrapper = setUp(initialState);
	});
	
	it('Availability page should render without errors', ()=>{
		const component = findByTestAttr(wrapper, 'availabilityComponent');
		expect(component.length).toBe(1);
})
})

