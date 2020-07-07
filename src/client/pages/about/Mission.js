import React, { Component } from 'react';
import intro from '../../assets/intro.jpg'
import './styleMission.css';




class Mission extends Component {
  render() {
    return (
       
        <div class="lastest_project">
        <div class="container">
            <div class="row align-items-center mb-80">
                <div class="col-xl-6 col-md-6">
                    <div class="section_title padding-right">
                        <h3>Notre Mission</h3>
                        <div class="seperator2"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. </p>
                        <div class="mission_contact">
                            <a href="#" class="boxed-btn large-width">Nous Contacter</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="single_project_thumb">
                        <img src={intro} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
    );
  }
}

export default Mission;