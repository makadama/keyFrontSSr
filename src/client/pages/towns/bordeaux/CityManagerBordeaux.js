import React, { Component } from 'react';
import managerLyon from '../../../assets/p2.jpg';
import './styleCityManagerBordeaux.css';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class CityManagerBordeaux extends Component  {
    render(){
    return(
        <div class="py-5 teamBordeaux">
  <div class="container">
    <div class="row">
     
      
      
      
     
      <div class="col-lg-3 mb-2 mt-0">
       
        <div class="row">
          <div class="col-md-12 text-center">
            <img src={managerLyon} alt="wrapkit" class="img-fluid rounded-circle" />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Andre Colman</h5>
              <h6 class="subtitle mb-3">City Manager à Bordeaux</h6>
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
        )
}
}

export default CityManagerBordeaux;
