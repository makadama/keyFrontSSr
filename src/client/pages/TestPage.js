import React, { Component } from 'react';
import Sidebar from '../components/leftSidebar'
import {Helmet} from 'react-helmet';

class  TestPage extends Component {
	 head(){
        return(
            <Helmet>
                <title> Villes - Keyservice TestPage </title>
            </Helmet>
            );
    }
  render() {
    return (
       
<div>
{this.head()}
    <Sidebar/>
</div>

    );
  }
}

export default {
  component: TestPage
};