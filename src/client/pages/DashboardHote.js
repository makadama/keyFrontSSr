import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import { logoutUser } from "../actions/authActions";
import requireAuth from '../components/hocs/requireAuth';
import { fetchCurrentUser } from '../actions/authActions';


class DashboardHote extends Component {
  constructor(){
    super()
    this.onLogoutClick=this.onLogoutClick.bind(this)
  }

  

  onLogoutClick(e){
    e.preventDefault();
    this.props.logoutUser();
  }


  render() {
         const { firstname } = this.props.auth;
         const { errors } = this.props.errors;
         
    return (
      

      <div className="jumbotron text-center">
           Hello, {firstname}
  <p className="lead"> You are logged in as a host  on key service</p>
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
          </button>
          <a href="/logementsListPage"> mes logements </a>
  
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
    requireAuth(DashboardHote)
  )
};


