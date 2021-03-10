import React, { Component } from 'react';
import './styleServicesHeader.css';




class ServicesHeader extends Component {
  render() {
    return (
       
         <div className="servicesSection">
            <div className="container">
                <div className='servicesInformation'>
                   
                    <h4 className="servicesInfo">Nos Services</h4>
                    <p className="servicesDesc">
                        KeyServices gère tout pour vous
                    </p>
                    <a href="/contact" class="boxed-btn2">Nous contacter</a>
                </div>
            </div>
        </div>
		
    );
  }
}

export default ServicesHeader;