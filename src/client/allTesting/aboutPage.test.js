import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../Utils';
import  AboutPage  from '../pages/about/IndexAboutPage';


const setUp = (props={}) => {
	const About = AboutPage.component;
	const component = shallow(<About {...props}/>);
	return component;
}

describe('About Component', () =>{
		let component;
		beforeEach(()=>{
			component = setUp();
		})
	it('About page should render without errors', ()=>{
		const wrapper = findByTestAttr(component, 'aboutPageComponent' );
		expect(wrapper.length).toBe(1);
})
})

