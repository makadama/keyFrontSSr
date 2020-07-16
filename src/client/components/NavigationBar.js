import React, { Component } from 'react';
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

  const authButton = auth ? (
    <li><a href="/api/api/auth/signout">Logout</a></li>
  ) : (
    <li><a href="/login" className="btn btn_login">Se connecter</a></li>
    <li><a href="/register" className="btn btn_register">S'inscrire</a></li>
  );


	handleClick(){
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

render(){
  return (
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
      <ul  className={this.state.isOpen? 'showNav': 'undif'}>
      		{authButton}
      </ul>
    </nav>
  )
}
};
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavigationBar);

