import React, { Component } from 'react';
import { fetchCurrentUser } from '../actions/authActions';
import { connect } from 'react-redux';
import logo from '../assets/keyLogo_last.jpg';
import './NavigationBar.css';


class NavigationBar extends Component{
	constructor(){
		super()
		this.state={
			isOpen:false
		}

		this.handleClick=this.handleClick.bind(this)
	}

 

	handleClick(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

  renderPage(){
     if (this.props.auth) {
     if (this.props.auth.type === "hote") {
      return "/dashboardHote";
      }
      if(this.props.auth.type === "voyageur"){
        return "/dashboardVoyageur";
    }
      
      
    }
  }



render(){
   
   const authButton = this.props.auth ? (
    <ul className={this.state.isOpen? 'showNav': 'undif'}>
       <li><a href={this.renderPage()}  style={{color:'#ed7e24',fontWeight: 'bold'}}><i class="fa fa-user"></i>     {this.props.auth.firstname}</a></li>
       <li><a href="/api/api/auth/signout"><i class="fa fa-power-off"> se deconnecter</i></a></li>  
    </ul>
  ) : (
    <ul className={this.state.isOpen? 'showNav': 'undif'}>
      <li><a href="/connexion" className="btn_login">Se connecter</a></li>
      <li><a href="/inscription" className="btn_register">S'inscrire</a></li>
    </ul>
  );


  return (
    <div className="nvbr">
    <nav>
      <div className="logoBtn">
      
      	<div className="logo">
      		 <a href="#"><img src={logo} alt=""/></a>
      	</div>
        <div className="btn bouton" onClick={this.handleClick}>
        	<div className="bar"></div>
        	<div className="bar"></div>
        	<div className="bar"></div>
        </div>
      </div>
      <ul className={this.state.isOpen? 'showNav': 'undif'}>
      		<li><a href="/">Accueil</a></li>
      		<li><a href="/a-propos">A propos de nous</a></li>
      		<li><a href="/contact">Nous contacter</a></li>
      		<li><a href="/services">Nos Services</a></li>
      		<li><a href="/villes">Nos Villes</a></li>
      </ul>
      {authButton}
    </nav>
    </div>
  )
}
};
const mapStateToProps = state => ({
  auth: state.auth
});



export default connect(mapStateToProps)(NavigationBar)



