import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './styleQuestion1.css';
const Question4 = ({question, active, setActive}) => {
  
       
    return (
    <div className="oneFaq">
        <div className="container">
          <div className="accordion">
            <div className="accordion-item" id="question4">
                <div  className="accordion-link" onClick={()=>setActive(question)}>
                    Puis-je réserver une prestation toute la saison ?
                    <i className="fas fa-plus"></i>
                    <i className="fas fa-minus"></i>
                </div>
                <div className={(active === question? "show" : "")+"answer"}>
                   <p>
                      Après avoir ajouté votre bien, vous aurez la possibilité de le mettre en location
                      dès que vous le voulez. Vous pouvez nous envoyer les périodes pendant lesquelles vous
                      l'occuperez et quand il sera libre.
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question4;

   





