import React, { Component } from 'react';
import './styleLyonHeader.css';




class LyonHeader extends Component {
  render() {
    return (
       
          <div className="lyonSection">
            <div className="container">
                <div className="lyonInformation">
                    <h2 className="lyonTitle">Key service,</h2>
                    <h4 className="lyonInfo">Votre conciergerie Airbnb</h4>
                    <p className="lyonDesc">
                        Lyon
                    </p>
                    <a href="/simulation" className="home-btn lyonBtn">Simuler votre bien</a>
                    <a href="/contact" className="home-btn lyonBtnContact">Nous contacter</a>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default LyonHeader;