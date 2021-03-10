import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/NavigationBar';
import HomeFooter from './pages/homeSections/HomeFooter';
import { fetchCurrentUser } from './actions/authActions';
import CookieConsent from "react-cookie-consent";

const App = ({ route }) => {
  return (
    <div>
      <NavBar/>
      {renderRoutes(route.routes)}
      <HomeFooter/>
      <CookieConsent style={{ background: "#ed7e24" }}>
        Ce site utilise des cookies provenant de Google pour fournir ses services et analyser le trafic.
		Votre adresse IP et votre user-agent, ainsi que des statistiques relatives aux performances et à la sécurité, 
		sont transmis à Google afin d'assurer un service de qualité, de générer des statistiques d'utilisation, 
		et de détecter et de résoudre les problèmes d'abus.
      </CookieConsent>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
