import React, { Component } from 'react';
import './styleTownsHeader.css';




class TownsHeader extends Component {
  render() {
    return (
       
         <div className="townSection">
            <div className="container">
                <div className='townInformation'>
                    <h4 className="townInfo">Key services dans les plus grandes villes Françaises</h4> 
                    <a href="/contact" className="boxed-btn2">Nous contacter</a>
                </div>
            </div>
        </div>
		
    );
  }
}

export default TownsHeader;