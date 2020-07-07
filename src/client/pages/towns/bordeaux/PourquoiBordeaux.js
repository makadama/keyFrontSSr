import React, { Component } from 'react';
import './stylePourquoiBordeaux.css';

class PourquoiBordeaux extends Component {
  render() {
    return (
    	<div>
        <div className="container-fluid grilleBordeaux">

        	<div className="row justify-content-center">
        		
        		<div className="col-xs-12 col-md-10">
        			<h2 className="titreBordeaux text-center"> Pourquoi Bordeaux? </h2>
        			<p className="texteBordeaux">Avec 12000 nouveaux habitants qui s’y installent chaque année, Bordeaux est la ville de Province qui a le vent en poupe. Selon un récent sondage, la capitale girondine recueille tous les suffrages, 40% des français reverraient d’y habiter et d’y travailler.
                    déalement située, Bordeaux offre un cadre de vie très agréable a ses habitants. A 45 minutes du bassin d’Arcachon et à 1h de l’océan, les weekends à bordeaux ont une toute autre saveur. La gastronomie du sud-ouest est réputée et Bordeaux accueille pléthore de restaurants, rendez-vous des bons vivants
                    </p>
        		</div>
        		


        	</div>

        
        </div>
        </div>

    );
  }
}

export default PourquoiBordeaux;