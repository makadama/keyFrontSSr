import React, { Component } from 'react';
import './styleHomeHeader.css';




class HomeHeader extends Component {
  render() {
    return (
       
         <div className="homeSection">
            <div className="container">
                <div className='homeInformation'>
                    <h2 className="homeTitle">Key service</h2>
                    <h4 className="homeInfo">conciergerie Airbnb</h4>
                    <p className="homeDesc">
                        Faites vous louer et gérer votre bien immobilier sans effort ! 
                    </p>
                    <a href="/simulation" className="boxed-btn2">Simuler un bien</a>
                </div>
            </div>
        </div>
		
    );
  }
}

export default HomeHeader;