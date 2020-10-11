import React, { Component } from 'react';
import './styleMarseilleHeader.css';




class MarseilleHeader extends Component {
  render() {
    return (
       
          <div className="marseilleSection">
            <div className="container">
                <div className="marseilleInformation">
                    <h2 className="marseilleTitle">Key service,</h2>
                    <h4 className="marseilleInfo">Votre conciergerie Airbnb</h4>
                    <p className="marseilleDesc">
                        Marseille
                    </p>
                    <a href="/simulation" className="home-btn marseilleBtn">Simuler votre bien</a>
                    <a href="/contact" className="home-btn marseilleBtnContact">Nous contacter</a>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default MarseilleHeader;