import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import { fetchCurrentUser } from '../actions/authActions';
import classnames from "classnames";
import { Helmet } from 'react-helmet';


class LoginAfterRegister extends Component{
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

     
        this.props.history.push("/dashboardHote");
      
      
      
    }
  }


	  componentWillReceiveProps(nextProps) {
	  	 if (nextProps.auth) {

    	
    		this.props.history.push("/dashboardHote");
    
      
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

		this.props.loginUser(user, this.props.history);	
		
	}

	render(){
		const { errors } = this.state;
		return(
			<div>
				{this.head()}
			<div className="container">
			<div className="row">
	          <div className="col-md-6 mt-5 mx-auto">
	          <p className="text-center">
                    {errors.message ? <span className="alert alert-danger" style={{width:'auto'}}>{errors.message} </span>:''}
                </p>
	            <form noValidate onSubmit={this.onSubmit}>
	             <div className="alert alert-info">
                  
                  <strong>Votre compte a été créé avec succès !</strong>
                    
                </div>
	              <h1 className="h3 mb-3 font-weight-normal">Login</h1>

	              	<div className="form-group">
	                <label htmlFor="email">Email address</label>
	                <input
	                  id="email"
	                  type="text"
	                  className={classnames("form-control",{
	                  	invalid: errors.email || errors.emailnotfound
	                  })}
	                  name="email"
	                  placeholder="Enter email"
	                  value={this.state.email}
                  	 
					  onChange={this.onChange}

                	/>
		                <span className="red-text">
		                  {errors.email}
		                  {errors.emailnotfound}
		                </span>
              		</div>

              		<div className="form-group">
	                <label htmlFor="password">Password</label>
	                <input
	                  id="password"
	                  type="password"
	                  className={classnames("form-control",{
	                  	invalid: errors.password || errors.passwordincorrect
	                  })}
	                  name="password"
	                  placeholder="Password"
                  	 
	                  value={this.state.password}
	                  onChange={this.onChange}
	                />
	                	 <span className="red-text">
		                  {errors.password}
		                  {errors.passwordincorrect}
		                </span>
              		</div>


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
  component : connect (mapStateToProps, { loginUser })(withRouter(LoginAfterRegister))
  
}
