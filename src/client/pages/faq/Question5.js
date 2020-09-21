import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './styleQuestion1.css';
const Question5 = ({question, active, setActive}) => {
  
       
    return (
    <div className="oneFaq">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question5">
                <div  className="accordion-link" onClick={()=>setActive(question)}>
                    Comment allez vous entretenir mes biens ?
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={(active === question? "show" : "")+"answer"}>
                   <p>
                    Nous veillons à ce que les ménages soient réalisés à l’aune des standards hôteliers.
                    Nous gérons le linge de maison afin que vos voyageurs se sentent comme à l’hôtel.
                    Pour toutes les pièces aspiration et lavage du sol .
                      Nous utilisons notre materiel et nos produits professionnels. 
                      Nous désinfectons avec nos produits les pièces necessaires.
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question5;

   





