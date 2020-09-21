import React, { Component } from 'react';
import mission from '../../assets/mission.jpg'
import './styleIntroducing.css';




class Introducing extends Component {
  render() {
    return (
       
        <div class="about_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title mb-60">
                        <h3>Qui sommes nous?</h3>
                        <div class="seperator"></div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-xl-6 col-md-6">
                    <div class="about_thumb">
                        <img src={mission} alt=""/>
                        <div class="exprience">
                            <h1>3</h1>
                            <span>ans  d'experience</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="about_info">
                        <div class="section_title">
                           
                            <h3> Historique </h3>
                            <div class="seperator2"></div>
                        </div>
                        <p>KEYSERVICES est un acteur relativement récent du monde de la conciergerie ayant
démarré son activité il y a 3 ans (créé le 15 janvier 2017), pourtant il comptabilise
déjà presque cent clients dans 4 villes de France (Paris, Bordeaux, Lyon, Marseille). Groomlidays met à votre disposition une conciergerie Airbnb
 et vous met en relation avec des concierges dédiés à la gestion de votre location de vacances </p>
                       
                        <a href="/contact" class="boxed-btn">Nous Contacter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
    );
  }
}

export default Introducing;