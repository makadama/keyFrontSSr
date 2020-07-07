import React, { Component } from 'react';
import './styleParisHeader.css';




class ParisHeader extends Component {
  render() {
    return (
       
          <div className="parisSection">
            <div className="container">
                <div className="parisInformation">
                    <h2 className="parisTitle">Key service,</h2>
                    <h4 className="parisInfo">Votre conciergerie Airbnb</h4>
                    <p className="parisDesc">
                        à Paris
                    </p>
                    <button className="home-btn parisBtn">Simuler votre bien!</button>
                    <button className="home-btn parisBtnContact">Nous Contacter</button>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default ParisHeader;