import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";

import './styleAccordion.css';

const AccordionIndex =() =>{
    const [active, setActive] = useState('');
 
       
    return (
    <div style={{marginTop:'100px', marginBottom:'5px', height:'auto'}} className="faqs"> 
        <div className="container">
            <h2>FAQ</h2>
           
            <div className="seperator2"></div>
            <p style={{textAlign:'center', marginBottom:'30px', fontSize:'20px'}}>Questions fréquemments posées</p>
            <Question1 question="question1" active={active} setActive={setActive}/>
            <Question2 question="question2" active={active} setActive={setActive}/>
            <Question3 question="question3" active={active} setActive={setActive}/>
            <Question4 question="question4" active={active} setActive={setActive}/>
            <Question5 question="question5" active={active} setActive={setActive}/>
        </div>
    </div>
    );
  
}

export default {
    component: AccordionIndex
}

   





