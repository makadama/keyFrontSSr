import React, { Component } from 'react';
import LyonHeader from './LyonHeader';
import PourquoiLyon from './PourquoiLyon';
import CallusLyon from './CallusLyon';
import EtudeDeCasLyon from './EtudeDeCasLyon';
import CityManagerLyon from './CityManagerLyon';
import {Helmet} from 'react-helmet';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class IndexLyon extends Component  {
     head(){
        return(
            <Helmet>
                <title> Lyon - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    render(){
	return(
        <div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
        {this.head()}
          <LyonHeader/>
          <PourquoiLyon/>
          <CallusLyon/>
          <EtudeDeCasLyon/>
          <CityManagerLyon/>
        </div>

		)
}
}
export default {
  component: IndexLyon
};
 
