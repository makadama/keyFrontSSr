import React, { Component } from 'react';
import MainTown from './towns/MainTown';
import TownsHeader from './towns/TownsHeader';
import TownsText from './towns/TownsText';
import {Helmet} from 'react-helmet';

class  TownPage extends Component {
	 head(){
        return(
            <Helmet>
                <title> Villes - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
  render() {
    return (
       
<div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
{this.head()}
    <TownsHeader/>
    <TownsText/>
    <MainTown/>
</div>

    );
  }
}

export default {
  component: TownPage
};