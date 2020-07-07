import React, { Component } from 'react';
import './styleHomePartenaire.css';
import logoAirbnb from '../../assets/airbnb3.png';
import logoAbritel from '../../assets/abritel3.png';
import logoBooking from '../../assets/booking3.png';




class IndexPartenaire extends Component {
  render() {
    return (
       <div>
      
            <div className="container-fluid partenaire">
              <h2 className="partTitle"> Voici les plateforme sur lesquelles keyservice publiera vos biens: </h2>
                <div className="row justify-content-center">
                    
                        <div className="col4">
                            
                                <img className="logo1 logo" src={logoAirbnb}/>
                            
                        </div>
                       
                         <div className="col4">
                            
                                <img className="logo3 logo" src={logoAbritel}/>
                            
                        </div>

                        <div className="col4">
                            
                                <img className="logo2 logo" src={logoBooking}/>
                            
                        </div>

                    
                </div>
            </div>
        
        </div>
    );
  }
}

export default IndexPartenaire;