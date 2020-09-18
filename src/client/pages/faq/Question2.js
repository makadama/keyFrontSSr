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
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                     Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed,
                      dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper 
                      ongue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est 
                      eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu 
                      massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. 
                      Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
                       Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
                       t augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et 
                       ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque
                       fermentum. Maecenas adipiscing ante non diam sodales hendrerit
                
                  </p>
                </div>
            </div>
          </div>
         </div>
    </div>
    );
  
}

export default Question2;

   





