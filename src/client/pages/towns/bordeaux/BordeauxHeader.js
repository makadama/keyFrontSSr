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
                    <button className="home-btn bordeauxBtn">Simuler votre bien!</button>
                    <button className="home-btn bordeauxBtnContact">Nous Contacter</button>
                </div>
            </div>
        </div>
        
		
    );
  }
}

export default BordeauHeader;