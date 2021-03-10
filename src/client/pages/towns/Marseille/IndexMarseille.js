import React, { Component } from 'react';
import MarseilleHeader from './MarseilleHeader';
import PourquoiMarseille from './PourquoiMarseille';
import CallusMarseille from './CallusMarseille';
import EtudeDeCasMarseille from './EtudeDeCasMarseille';
import CityManagerMarseille from './CityManagerMarseille';
import { Helmet } from 'react-helmet';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexMarseille extends Component  {
     head(){
        return(
            <Helmet>
                <title> Marseille - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    render(){
	return(
        <div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
        {this.head()}
          <MarseilleHeader/>
          <PourquoiMarseille/>
          <CallusMarseille/>
          <EtudeDeCasMarseille/>
          <CityManagerMarseille/>
        </div>

		)
}
}
export default {
  component: IndexMarseille
};
 
