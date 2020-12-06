import React, { Component } from 'react';
import citymanager1 from '../../assets/p1.jpg';
import citymanager2 from '../../assets/p2.jpg';
import citymanager3 from '../../assets/p3.jpg';
import citymanager4 from '../../assets/p4.jpg';
import './styleTeam.css';




class Team extends Component {
  render() {
    return (
       
         <div class="py-5 team4">
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3">L'équipe Keyservice</h3>
        <h6 class="subtitle">You can relay on our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div>
    <div class="row">
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
            <img src={citymanager1} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center justify-content-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Caroline Corantin</h5>
              <h6 class="subtitle mb-3">City Manager Lyon</h6>
              <ul class="list-inline justify-content-center">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i className="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
            <img src={citymanager2} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center justify-content-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">André Colman</h5>
              <h6 class="subtitle mb-3">City Manager Bordeaux</h6>
              <ul class="list-inline justify-content-center">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i className="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
            <img src={citymanager3} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center justify-content-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Simone Dubois</h5>
              <h6 class="subtitle mb-3">City Manager Marseille</h6>
              <ul class="list-inline justify-content-center">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i className="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
      
      
      <div class="col-lg-3 mb-4">
        
        <div class="row">
          <div class="col-md-12">
            <img src={citymanager4} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center justify-content-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Michael Johnson</h5>
              <h6 class="subtitle mb-3">City Manager Paris</h6>
              <ul class="list-inline justify-content-center">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i className="fab fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="fab fa-instagram"></i></a></li>
                
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>
		
    );
  }
}

export default Team;