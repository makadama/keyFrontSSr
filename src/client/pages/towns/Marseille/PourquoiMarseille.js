import React, { Component } from 'react';
import './stylePourquoiMarseille.css';

class PourquoiMarseille extends Component {
  render() {
    return (
    	<div>
        <div className="container-fluid grilleMarseille">

        	<div className="row justify-content-center">
        		
        		<div className="col-xs-12 col-md-10">
        			<h2 className="titreMarseille text-center"> Pourquoi Marseille? </h2>
        			<p className="texteMarseille">Idéalement située au sud-est de la France, Marseille se distingue des autres métropoles françaises à différents niveaux. Grâce à son dynamisme et ses infrastructures modernes, elle attire les chefs d’entreprises français et étrangers qui décident d’y installer leurs entreprises et d’y faire développer leurs activités. 
                    Un des atouts majeurs de la Cité Phocéenne pour attirer les investisseurs, la disponibilité des biens immobiliers et des terres et leurs prix attractifs.
                    </p>
        		</div>
        		


        	</div>

        
        </div>
        </div>

    );
  }
}

export default PourquoiMarseille;