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
      <CookieConsent style={{ background: "#2c4b29" }}>
          This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
