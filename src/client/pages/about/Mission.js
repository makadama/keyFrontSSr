import React, { Component } from 'react';
import intro from '../../assets/intro.jpg'
import './styleMission.css';




class Mission extends Component {
  render() {
    return (
       
        <div class="lastest_project">
        <div class="container">
            <div class="row align-items-center mb-80">
                <div class="col-xl-6 col-md-6">
                    <div class="section_title padding-right">
                        <h3>Notre Mission</h3>
                        <div class="seperator2"></div>
                        <p>Keyservice offre une gestion clé en main de vos
                         locations saisonnières en s’occupant de toute la logistique liée à la location
                          Airbnb (ménage, accueil des voyageurs, maintenance…) et en maximisant vos revenus.
                          Notre atout numéro 1 reste son désir, son devoir même auprès de ses clients - qu’ils
soient de simples particuliers ou bien de grandes entreprises - de conserver le
côté “chaleureux/cozy” et “authentique” qui se perd trop souvent lorsqu’on délaisse la gestion de son “chez-soi” à une entreprise. </p>
                        <div class="mission_contact">
                            <a href="/contact" class="boxed-btn large-width">Nous Contacter</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="single_project_thumb">
                        <img src={intro} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
    );
  }
}

export default Mission;