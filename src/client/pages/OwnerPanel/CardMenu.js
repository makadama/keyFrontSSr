import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class CardMenu extends Component {
  



  render() {
         const { logement } = this.props.logements;
         console.log(logement);
         const { id } = this.props.auth;
    return (
    <div>  
     
    <div className="container-fluid ">
      
      <div class="row ">
            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center " >
                <div class="card-box bg-blue ">
                    <div class="inner ">
                        <h3> Disponibilité </h3>
                    </div>
                    <div class="icon">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardHote/${id}/mes-biens/${logement.id}/disponibilites`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center">
                <div class="card-box bg-green">
                    <div class="inner">
                        <h3> Tarif </h3>
                    </div>
                    <div class="icon">
                        <i class="fas fa-percentage" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardHote/${id}/mes-biens/${logement.id}/mon-tarif`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

             <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center">
                <div class="card-box bg-green">
                    <div class="inner">
                        <h3> Photos </h3>
                    </div>
                    <div class="icon">
                        <i class="fa fa-image" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardHote/${id}/mes-biens/${logement.id}/upload`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            
            
        </div>
     </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return { logements: state.logements, auth: state.auth};
}


export default connect (mapStateToProps)(CardMenu);
   





