import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from '../NavigationBar';
import HomeFooter from '../../pages/homeSections/HomeFooter';
import SideBar from '../leftSidebarTraveller/index'; 
import { fetchCurrentUser } from '../../actions/authActions';


const TravellerLayout = ({ route }) => {
  return (
    <div>
      <NavBar/>
      <SideBar/>
      {renderRoutes(route.routes)}
      <HomeFooter/>
    </div>
  );
};

export default {
  component: TravellerLayout,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
