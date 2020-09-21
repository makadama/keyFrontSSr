import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './styleQuestion1.css';
const Question3 = ({question, active, setActive}) => {
  
       
    return (
    <div className="oneFaq">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question3">
                <div  className="accordion-link" onClick={()=>setActive(question)}>
                    J'ai plusieurs biens! Puis-je choisir différents services pour chaque bien ?
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={(active === question? "show" : "")+"answer"}>
                   <p>
                      Keyservice vous offre deux tarifs. Vous pouvez choisir le tarif que vous souhaiter après avoir 
                      ajouter le bien concerné. Vous pouvez changer de tarif quand vous le souhaiter. Néanmoins ce changement ne 
                      sera pas effective a partir de la prochaine location.
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question3;

   





