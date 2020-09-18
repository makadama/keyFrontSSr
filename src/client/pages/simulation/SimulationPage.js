import React, { Component } from 'react';

import { Helmet } from 'react-helmet';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class SimulationPage extends Component  {
     head(){
        return(
            <Helmet>
                <title> Simulation - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    render(){
	return(
        <div style={{marginTop:'100px', marginBottom:'5px', height:'auto'}}>
          {this.head()}
          <div>
            my Simulation page
          </div>
        </div>

		)
}
}
export default {
  component: SimulationPage
};
 
