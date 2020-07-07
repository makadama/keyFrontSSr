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
                    <button className="home-btn marseilleBtn">Simuler votre bien!</button>
                    <button className="home-btn marseilleBtnContact">Nous Contacter</button>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default MarseilleHeader;