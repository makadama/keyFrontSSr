import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import  HomePage  from '../pages/HomePage';


const setUp = (props={}) =>{
	const Home = HomePage.component;
	const component = shallow(<Home {...props}/>);
	return component;
}


describe('Home Component', () =>{
	let component;
	beforeEach(()=>{
		component = setUp();
	})
	it('Home page should render without errors', ()=>{
		const wrapper = findByTestAttr(component, 'homePageComponent' );
		expect(wrapper.length).toBe(1);
})
})

