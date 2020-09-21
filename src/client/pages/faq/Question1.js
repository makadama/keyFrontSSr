import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './styleQuestion1.css';
const Question1 =({question, active, setActive}) => {
  
       
    return (
    <div className="oneFaq">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question1">
                <div className="accordion-link" onClick={()=>setActive(question)}>
                    Comment devenir hôte chez keyservice ? 
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={(active === question? "show" : "")+"answer"}>
                    <p>
                      Pour devenir  hôte chez keyservice, il suffit de vous inscrire et d'ajouter votre bien.
                      Nous conseillons de faire d'abord une simulation pour savoir approximativement combien vous 
                      vous apporterait votre bien si vous nous le confiez.
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question1;

   





