import React, { Component } from 'react';
import BordeauxHeader from './BordeauxHeader';
import CallusBordeaux from './CallusBordeaux';
import EtudeDeCasBordeaux from './EtudeDeCasBordeaux';
import PourquoiBordeaux from './PourquoiBordeaux';
import CityManagerBordeaux from './CityManagerBordeaux';
import { Helmet } from 'react-helmet';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexBordeaux extends Component  {
   head(){
        return(
            <Helmet>
                <title> Bordeaux - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    render(){
	return(
        <div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
        {this.head()}
          <BordeauxHeader/>
          <PourquoiBordeaux/> 
          <CallusBordeaux/>
          <EtudeDeCasBordeaux/>
          <CityManagerBordeaux/>
        </div>

		)
}
}
export default {
  component: IndexBordeaux
};
 
