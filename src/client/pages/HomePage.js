import React, {Component} from 'react';
import './HomePage.css';
import { Helmet } from 'react-helmet';
import HomeHeader from './homeSections/HomeHeader';
import HomeAbout from './homeSections/HomeAbout';
import	HomeService from './homeSections/HomeService';
import	HomeTarif	 from './homeSections/HomeTarif';
import HomePartenaire from './homeSections/HomePartenaire';
import HomeTestimonials from './homeSections/HomeTestimonials';


class Home extends Component{
  head(){
    return(
        <Helmet>
          <title>Accueil - Keyservice Conciergerie</title>  
      </Helmet>
      );
  }
render(){

  return (
    <div>
      {this.head()}
     	<HomeHeader/>
     	<HomeAbout/>
     	<HomeService/>
     	<HomeTarif/>
     	<HomePartenaire/>
     	<HomeTestimonials/>
     	
    </div>
  );
};
};

export default {
  component: Home
};
