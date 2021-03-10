import React, { Component } from 'react';
import './styleMainTown.css';
import  paris from  '../../assets/paristown2.jpg';
import lyon from '../../assets/lyontown.jpg';
import marseille from  '../../assets/marseilletown2.jpg';
import bordeaux from  '../../assets/bordeauxtown2.jpg';




class  MainTown extends Component {
  render() {
    return (
<div class="townsSlider">      
<div class="container  py-0 mt-0"> 
  <div class="py-5">
     <div class="text-center">
                      <h3 class="mb-3">les villes de keyservices</h3>
                      <div class="seperator"></div>
      </div>
    <div class="row mb-3 ">
     
      <div class="col-lg-6 mb-3 mb-lg-0">
        <a href="/ville/paris"><div class="hover hover-5 text-white rounded"><img src='media/paristown2.jpg' alt=""/>
          <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <h3 class="hover-5-title text-uppercase font-weight-light mb-0">PARIS<strong class="font-weight-bold text-white"></strong><span></span></h3>
          </div>
        </div></a>
      </div>
      <div class="col-lg-6">
        <a href="/ville/lyon">
        <div class="hover hover-5 text-white rounded"><img src={lyon} alt=""/>
          <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <h3 class="hover-5-title text-uppercase font-weight-light mb-0">LYON<strong class="font-weight-bold text-white"></strong><span></span></h3>
          </div>
        </div>
        </a>
      </div>
    </div>
    <div class="row">
     
      <div class="col-lg-6 mb-3 mb-lg-0">
        <a href="/ville/marseille">
        <div class="hover hover-5 text-white rounded"><img src={marseille} alt=""/>
          <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <h3 class="hover-5-title text-uppercase font-weight-light mb-0">MARSEILLE<strong class="font-weight-bold text-white"></strong><span></span></h3>
          </div>
        </div>
        </a>
      </div>
      <div class="col-lg-6">
        <a href="/ville/bordeaux">
        <div class="hover hover-5 text-white rounded"><img src={bordeaux} alt=""/>
          <div class="hover-overlay"></div>
          <div class="hover-5-content">
            <h3 class="hover-5-title text-uppercase font-weight-light mb-0">BORDEAUX<strong class="font-weight-bold text-white"></strong><span></span></h3>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>

</div>
</div>


    );
  }
}

export default  MainTown;