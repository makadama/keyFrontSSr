import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/NavigationBar';
import HomeFooter from './pages/homeSections/HomeFooter';
import { fetchCurrentUser } from './actions/authActions';


const App = ({ route }) => {
  return (
    <div>
      <NavBar/>
      {renderRoutes(route.routes)}
      <HomeFooter/>
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
