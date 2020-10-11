import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../../../Utils';
import  ContactPage  from '../pages/ContactPage';

const setUp= (initialState = {}) => {
	const store = testStore(initialState);
	const Contact = ContactPage.component;
	const wrapper = shallow(<Contact store={store}/>).dive();
	return wrapper;
}

describe(' Testing a connected Component: contacte Page', () =>{
	let wrapper;
	beforeEach(()=>{
		const initialState = {
			mail:{
				isSent: false,
				mailInfo: {
					expediteur: "Adama",
					email: "adama@gmail.com",
					message: 'bonjour keyservice'
				}
	
		}
	}
		wrapper = setUp(initialState);
	});
	
	it('Contact page should render without errors', ()=>{
		const component = findByTestAttr(wrapper, 'contactComponent');
		expect(component.length).toBe(1);
})
})

