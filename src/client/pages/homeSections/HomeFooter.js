import React, { Component } from 'react'
import './styleHomeFooter.css';
import logo from '../../assets/keyLogo2.png';

class IndexFooter extends  Component{
  render(){

    return(
      
        <div className="container-fluid foot1 ">
          <div className="row niveau1 d-flex justify-content-center">
            <div className="col-md-12 text-center">
              <img className="hidden-xs img-block logoKey" src={logo}/>          
            </div>
          </div>
         
            <div className="row  foo justify-content-center">
              <div className="col-md-4 colonne md-0 ">
                <h3 className="titre text-center "> Nous découvrir </h3>
                <ul className="decouverte">
                    <li>
                      <a  href="/a-propos"> Qui sommes nous? </a>
                    </li>
                    <li>
                      <a  href="/contact"> Nous contacter </a>
                    </li>
                    <li> 
                      <a  href="/faq"> FAQ </a>
                    </li>
                </ul>
              </div>
               <div className="col-md-4 colonne  text-center">
                <h3> Nous suivre </h3>
                <ul class="social_footer_ul">
                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                </ul>
              </div>
               <div className="col-md-4 colonne md-0">
                <h3 className="text-center "> A propos</h3>
                <ul className="aPropos">
                    <li>
                      <a  href="/services"> Nos services </a>
                    </li>
                    <li> 
                      <a  href="/villes"> Devenir notre concierge </a>
                    </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> f2i-cw22-ams.fr</a>
  </div>
          
</div>
      
      )

  }

}




export default IndexFooter;