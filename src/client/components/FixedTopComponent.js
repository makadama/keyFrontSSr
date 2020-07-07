import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
class FixedTopComponent extends Component {
    render() {
        return(
        <div id='fixed-top' style={{display: 'flex',
            flexDirection: 'column'}} fixed='top'>
            <NavigationBar/>
        </div>
        )
    }
}
export default FixedTopComponent;