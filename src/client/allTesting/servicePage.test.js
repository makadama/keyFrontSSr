import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import  ServicePage  from '../pages/services/IndexServicePage';

const setUp = (props={}) =>{
	const Service = ServicePage.component;
	const component = shallow(<Service />);
	return component;
}
describe('Service Component', () =>{
	let component;
	component = setUp();
	it('Services page should render without errors', ()=>{
		const wrapper = findByTestAttr(component, 'servicePageComponent' );
		expect(wrapper.length).toBe(1);
})
})

