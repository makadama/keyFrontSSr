import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { fetchCurrentUser } from '../actions/authActions';
import classnames from "classnames";
import './LoginPage.css';
import { Helmet } from 'react-helmet';


class LoginPage extends Component{
	constructor(){
		super()
		this.state={
			email: '',
			password: '',
			errors:{}
		}

		this.onChange=this.onChange.bind(this)
		this.onSubmit= this.onSubmit.bind(this)
	}

	 head(){
        return(
            <Helmet>
                <title> Se connecter - Keyservice Conciergerie </title>
            </Helmet>
            );
    }

	componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth) {
		 if (this.props.auth.type === "hote") {
			this.props.history.push("/dashboardHote");
    	}
    	if(this.props.auth.type === "voyageur"){
    		this.props.history.push("/dashboardVoyageur");
    }
      
      
    }
  }


	  componentWillReceiveProps(nextProps) {
	  	 if (nextProps.auth) {
				if (nextProps.auth.type === "hote") {
			    		this.props.history.push("/dashboardHote");
			    }
			    if(nextProps.auth.type === "voyageur") {
			    		this.props.history.push("/dashboardVoyageur");
			    }


    
      
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

	onChange (e){
		this.setState({[e.target.name]:e.target.value})
	}

	onSubmit(e){
		e.preventDefault();
		const user={
			email: this.state.email, 
			password: this.state.password

		}

		this.props.loginUser(user);	
		
	}

	render(){
		const { errors } = this.state;
		return(
			<div style={{marginTop:'100px', marginBottom:'1px', height:'auto'}}>
				{this.head()}
			<div className="container loginPage">
			<div className="row">
	          <div className="col-md-6 mt-5 mx-auto">
	          <p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
                </p>
	            <form noValidate onSubmit={this.onSubmit}>
	              <h1 className="h3 mb-3 font-weight-normal">Se connecter</h1>
	              	<div className="seperator2"></div>
	              	<div className="form-group">
	                <label htmlFor="email">Adresse email</label>
	                <input
	                  id="email"
	                  type="text"
	                  className={classnames("form-control",{
	                  	invalid: errors.email || errors.emailnotfound
	                  })}
	                  name="email"
	                  placeholder="Entrer votre email"
	                  value={this.state.email}
                  	 
					  onChange={this.onChange}

                	/>
                	
		                <span className="red-text">
		                  {errors.email}
		                  {errors.emailnotfound}
		                </span>
              		</div>

              		<div className="form-group">
	                <label htmlFor="password">Mot de Passe</label>
	                <input
	                  id="password"
	                  type="password"
	                  className={classnames("form-control",{
	                  	invalid: errors.password || errors.passwordincorrect
	                  })}
	                  name="password"
	                  placeholder="Entrer votre mot de passe"
                  	 
	                  value={this.state.password}
	                  onChange={this.onChange}
	                />
	                	 <span className="red-text">
		                  {errors.password}
		                  {errors.passwordincorrect}
		                </span>
              		</div>
              		 <p className="text-p text-right"> <a href="/mot-de-passe-oublie">Mot de passe oublié?</a> </p>


	              <button
	                type="submit"
	                className="btn btn-lg btn-primary btn-block"
	              >
	                Login!
	              </button>

              		<label>Pas de compte?
              			 <a className="underlineHover" href="/register"> inscrivez vous!</a> 
              		</label>
              	
            </form>
              </div>
             </div>
             </div>
             </div>

			)
	}
}


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default{
  component : connect (mapStateToProps, { loginUser })(LoginPage)
  
}
