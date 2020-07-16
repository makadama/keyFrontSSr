import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LoginAfterRegister from './pages/LoginAfterRegister';
import DashboardHote from './pages/DashboardHote';
import NotFoundPage from './pages/NotFoundPage';
import LogementsListPage from './pages/LogementsListPage';
import TownPage from "./pages/TownPage";
import ParisPage from './pages/towns/paris/IndexParis';
import LyonPage from './pages/towns/Lyon/IndexLyon';
import MarseillePage from './pages/towns/Marseille/IndexMarseille';
import BordeauxPage from './pages/towns/bordeaux/IndexBordeaux';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/services/IndexServicePage';
import AboutPage from './pages/about/IndexAboutPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...RegisterPage,
        path: '/register'
      },
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...DashboardHote,
        path: '/dashboardHote'
      },
      {
        ...LoginAfterRegister,
        path: '/loginAfterRegister'
      },
      {
        ...LogementsListPage,
        path: '/logementsListPage'
      },
      {
        ...TownPage,
        path: '/villes'
      },
      {
        ...ParisPage,
        path: '/ville/paris'
      },
       {
        ...LyonPage,
        path: '/ville/lyon'
      },
      {
        ...MarseillePage,
        path: '/ville/marseille'
      },
      {
        ...BordeauxPage,
        path: '/ville/bordeaux'
      },
      {
        ...ContactPage,
        path: '/contact'
      },
      {
        ...ServicePage,
        path: '/services'
      },
       {
        ...AboutPage,
        path: '/a-propos'
      },
      {
        ...NotFoundPage
      },
    ]
  }
];
