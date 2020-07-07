import React, { Component } from 'react'
import './styleHomeTarif.css';





class HomeTarif extends Component {
  render() {
    return (
      
          <div className="sections exprets">
            
            <div class="container">
                <div class="section-header text-center">
                    <h2 class="section-title">Nos Offres</h2>
                    <div class="line">
                        <span></span>
                    </div>
                </div>
                
                <div class="row justify-content-around">
                    <div class="col-xs-10 col-sm-5 col-md-5 comp1">
                        <div class="progress-content">
                            <h3 style={{textAlign:'center'}}>Pack checkin-checkout</h3>
                            <div class="progress blue">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-value">10%</span>
                            </div>
                            <div class="title">de commission TTC</div>
                            <div>
                                <h4>Ce dont vous bénéficiez en choisissant ce tarif:</h4>
                                <ul className="green-tick">
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        gestion des annonces
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        Accueil des voyageurs
                                    </li>
                                     <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       départ des voyageurs
                                    </li>

                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       communictions avec les voyageurs
                                    </li>
                                    
                                </ul>
                                
                            </div>
                            <div className="tarif-end">
                                 <i className="fas fa-arrow-right"></i>
                                 <a href="" className="linkTarif">  En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-xs-10 col-sm-5 col-md-5 comp2">
                        <div class="progress-content">
                            <h3 style={{textAlign:'center'}}>Pack All-Inclusive</h3>
                            <div class="progress yellow">
                                <span class="progress-left">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-right">
                                    <span class="progress-bar"></span>
                                </span>
                                <span class="progress-value">25%</span>
                            </div>
                            <div class="title">de commission TTC</div>
                            <div>
                                <h4>Ce dont vous bénéficiez en choisissant ce tarif:</h4>
                                <ul className="green-tick">
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        gestion des annonces
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                        Accueil des voyageurs
                                    </li>
                                     <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       départ des voyageurs
                                    </li>

                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       communictions avec les voyageurs
                                    </li>
                                    <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       ménage
                                    </li>
                                   <li className="listItem">
                                        <i className="fas fa-check"></i>
                                       état des lieux
                                    </li>

                                </ul>
                                
                            </div>
                            <div className="tarif-end">
                                 <i className="fas fa-arrow-right"></i>
                                 <a href="" className="linkTarif">  En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
           );
  }
}

export default HomeTarif;