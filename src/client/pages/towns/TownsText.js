import React, { Component } from 'react';
import  './styleTownsText.css';


class TownsText extends Component {
  render() {
    return (
    	<div>
        <div className="container-fluid grilleTowns">

        	<div className="row justify-content-center">
        		
        		<div className="col-xs-12 col-md-10">
        		
        			<p className="texteTowns">KeyService est une plateforme qui vous
               permet de confier votre logement lorsque vous vous absentez de
                votre domicile et de tirer un revenu sur vos locations. Les voyageurs 
                sélectionnés pour loger chez vous sont choisis selon un processus de sélection 
                rigoureux afin d’éviter les mauvaises surprises. A l’heure actuelle,
                 nous opérons  dans les grandes villes de la France mais comptons nous développer
                  dans de nouvelles villes dans un futur proche.
					</p>
        		</div>
        		


        	</div>

        	<div className="row justify-content-center">
            <div className="col-3 text-center aboutBtn">
        			<a href="/a-propos" className="btnContact">A propos</a>
            </div>
        	</div>
          

          <hr/>
        </div>
      
</div>
    );
  }
}

export default TownsText;