import React, { Component } from 'react';
import mission from '../../assets/mission.jpg'
import './styleIntroducing.css';




class Introducing extends Component {
  render() {
    return (
       
        <div class="about_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title mb-60">
                        <h3>Qui sommes nous?</h3>
                        <div class="seperator"></div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-xl-6 col-md-6">
                    <div class="about_thumb">
                        <img src={mission} alt=""/>
                        <div class="exprience">
                            <h1>5</h1>
                            <span>ans  d'experience</span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="about_info">
                        <div class="section_title">
                           
                            <h3> Historique </h3>
                            <div class="seperator2"></div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                            viverra maecenas accumsan lacus vel facilisis. </p>
                        <ul class="about_list">
                            <li>Consectetur adipiscing sed do eiusmod. </li>
                            <li>Eiusmod tempor incididunt labore. </li>
                        </ul>
                        <a href="#" class="boxed-btn">Nous Contacter</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
		
    );
  }
}

export default Introducing;