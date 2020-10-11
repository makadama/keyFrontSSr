import React, { Component } from 'react';
import './styleBordeauxHeader.css';




class BordeauHeader extends Component {
  render() {
    return (
       
          <div className="bordeauxSection">
            <div className="container bordeauxContainer">
                <div className="bordeauxInformation">
                    <h2 className="bordeauxTitle">Key service,</h2>
                    <h4 className="bordeauxInfo">Votre conciergerie Airbnb</h4>
                    <p className="bordeauxDesc">
                        Bordeaux
                    </p>
                    <a href="/simulation" className="home-btn bordeauxBtn">Simuler votre bien</a>
                    <a href="/contact" className="home-btn bordeauxBtnContact">Nous contacter</a>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default BordeauHeader;