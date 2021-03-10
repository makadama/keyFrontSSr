import React, { Component } from 'react';
import ParisHeader from './ParisHeader';
import PourquoiParis from './PourquoiParis';
import CallusParis from './CallusParis';
import EtudeDeCas from './EtudeDeCas';
import CityManagerParis from './CityManagerParis';
import { Helmet } from 'react-helmet';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexParis extends Component  {
     head(){
        return(
            <Helmet>
                <title> Paris - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    render(){
	return(
        <div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
        {this.head()}
          <ParisHeader/>  
          <PourquoiParis/> 
          <CallusParis/> 
          <EtudeDeCas/>
          <CityManagerParis/>
        </div>

		)
}
}
export default {
  component: IndexParis
};
 
