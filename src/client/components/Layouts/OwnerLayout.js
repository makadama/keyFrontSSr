import React from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from '../NavigationBar';
import HomeFooter from '../../pages/homeSections/HomeFooter';
import SideBar from '../leftSidebar/index'; 
import { fetchCurrentUser } from '../../actions/authActions';


const OwnerLayout = ({ route }) => {
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
  component: OwnerLayout,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
