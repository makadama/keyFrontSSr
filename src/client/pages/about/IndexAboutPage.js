import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Introducing from './Introducing';
import Mission from './Mission';
import AboutHeader from "./AboutHeader";
import Team from './Team';




class IndexAboutPage extends Component {
    head(){
        return(
            <Helmet>
                <title> A propos - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
  render() {
    return (
       
         <div data-test="aboutPageComponent"  style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
            {this.head()}
            <AboutHeader/>
            <Introducing/>
            <Mission/>
            <Team/>
        </div>
		
    );
  }
}

export default {
  component: IndexAboutPage
}; 