import React, { Component } from "react";
import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from "../../actions/authActions";
import requireAuth from '../../components/hocs/requireAuth';
import { fetchCurrentUser } from '../../actions/authActions';
import '../styleDashboardHote.css';

class DashboardVoyageur extends Component {
  constructor(){
    super()
    this.onLogoutClick=this.onLogoutClick.bind(this)
  }

  head(){
        return(
            <Helmet>
                <title> Mon compte - Keyservice Conciergerie </title>
            </Helmet>
            );
    }

  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }


  render() {

         const { firstname } = this.props.auth;
         const { errors } = this.props.errors;
         const {id} = this.props.auth  ;
         const {auth} = this.props;
         console.log(auth);

    return (
    <div style={{top:'100px'}} className="dash">  
      {this.head()}
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-12 col-md-12">
            <div className="jumbotron jumbotron-fluid text-center">
                <h1>bonjour, {firstname}</h1>
                <p className="lead"> Bienvenue dans votre espace membre</p>
            </div>
        </div>
      </div>
      <div class="row " style={{marginBottom:'15px'}}>
            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center " >
                <div class="card-box bg-blue ">
                    <div class="inner ">
                        <h3> Ma location </h3>
                    </div>
                    <div class="icon">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardVoyageur/${id}/ma-location`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center">
                <div class="card-box bg-green">
                    <div class="inner">
                        <h3> les paniers Keyservice </h3>
                    </div>
                    <div class="icon">
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardVoyageur/${id}/produits`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>

             <div class="col-lg-4 col-md-6 col-xs-12 d-flex justify-content-center">
                <div class="card-box bg-green">
                    <div class="inner">
                        <h3> Mon profil </h3>
                    </div>
                    <div class="icon">
                        <i class="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <a href={`/dashboardVoyageur/${id}/mon-profil`} class="card-box-footer">Voir <i class="fa fa-arrow-circle-right"></i></a>
                </div>
            </div>
            
            
        
            
            
        </div>
     </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


function loadData(store){

  return store.dispatch(fetchCurrentUser());
}

export default {
  loadData,
  component: connect(mapStateToProps)(
    requireAuth(DashboardVoyageur)
  )
};


