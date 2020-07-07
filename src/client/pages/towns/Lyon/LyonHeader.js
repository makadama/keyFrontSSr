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
                    <button className="home-btn lyonBtn">Simuler votre bien!</button>
                    <button className="home-btn lyonBtnContact">Nous Contacter</button>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default LyonHeader;