import React, { Component } from 'react';
import AllServices from './AllServices';
import ServicesHeader from './ServicesHeader';
import { Helmet } from 'react-helmet';

class IndexServicePage extends Component{
	 head(){
        return(
            <Helmet>
                <title> Services - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
	render(){
		return(
			<div>
				 {this.head()}
				<ServicesHeader/>
				<AllServices/>
			</div>
			)
	}
}
export default {
  component: IndexServicePage
}; 