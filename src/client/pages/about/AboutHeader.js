import React, { Component } from 'react';
import './styleAboutHeader.css';




class AboutHeader extends Component {
  render() {
    return (
       
         <div className="aboutSection">
            <div className="container">
                <div className='aboutInformation'>
                    <h2 className="aboutTitle">Key service</h2>
                    <h4 className="aboutInfo">conciergerie Airbnb</h4>
                    <p className="aboutDesc">
                        Faites vous louer et gérer votre bien immobilier sans effort ! 
                    </p>
                    <a href="#" class="boxed-btn2">Devenir hôte</a>
                </div>
            </div>
        </div>
		
    );
  }
}

export default AboutHeader;