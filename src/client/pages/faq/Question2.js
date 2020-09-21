import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './styleQuestion1.css';
const Question2 = ({question, active, setActive}) => {
  
       
    return (
    <div className="oneFaq">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question2">
                <div  className="accordion-link" onClick={()=>setActive(question)}>
                    Je suis voyageur! Comment rester en contact avec Keyservice ?
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={(active === question? "show" : "")+"answer"}>
                   <p>
                     En tant que voyageur chez Keyservice, vous n'aurez pas besoin de vous inscrire.
                     Dès que vous choisissez de vous loger dans l'un des biens gérés par Keyservice. Nous vous
                     attribuerons un identifiant et un mot de passe avec lequel vous pouvez vous connecter sur 
                     votre espace membre. De là vous pouvez rester en contact avec nous plus facilement.
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question2;

   





