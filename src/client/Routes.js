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
import TestPage from './pages/TestPage';
import OwnerLayout from './components/Layouts/OwnerLayout';
import AddLogementPage from './pages/OwnerPanel/AddLogementPage';
import LogementDetailsPage from './pages/OwnerPanel/LogementDetailsPage';
import LogementAvailability from './pages/OwnerPanel/LogementAvailability';
import MyTarif from './pages/OwnerPanel/MyTarif';
import UserProfil from './pages/OwnerPanel/UserProfil';
import DashboardVoyageur from './pages/TravelerPanel/DashboardVoyageur';
import RentInfosPage from './pages/TravelerPanel/RentInfosPage';
import TravellerLayout from './components/Layouts/TravellerLayout';
import ProductListPage from './pages/TravelerPanel/ProductListPage';
import DisplayProduct from './pages/TravelerPanel/DisplayProduct';
import CartItems from './pages/TravelerPanel/CartItems';
import ExpeditionPage from './pages/TravelerPanel/ExpeditionPage';
import ChoixPaiementPage from './pages/TravelerPanel/ChoixPaiementPage';
import DisplayCommandePage from './pages/TravelerPanel/DisplayCommandePage';
import PlaceOrder from './pages/TravelerPanel/PlaceOrder';

export default [
  {
    path:'/register',
    ...App,
    routes:[
        {
          ...RegisterPage
        }
    ]
  },
  {
    path:'/login',
    ...App,
    routes:[
        {
          ...LoginPage
        }
    ]
  },
  {
    path:'/loginAfterRegister',
    ...App,
    routes:[
        {
          ...LoginAfterRegister
        }
    ]
  },
  {
    path:'/villes',
    ...App,
    routes:[
        {
          ...TownPage
        }
    ]
  },
  {
    path:'/ville/paris',
    ...App,
    routes:[
        {
          ...ParisPage
        }
    ]
  },
  {
    path:'/ville/lyon',
    ...App,
    routes:[
        {
          ...LyonPage
        }
    ]
  },
  {
    path:'/ville/bordeaux',
    ...App,
    routes:[
        {
          ...BordeauxPage
        }
    ]
  },
  {
    path:'/ville/marseille',
    ...App,
    routes:[
        {
          ...MarseillePage
        }
    ]
  },
  {
    path:'/contact',
    ...App,
    routes:[
        {
          ...ContactPage
        }
    ]
  },
  {
    path:'/services',
    ...App,
    routes:[
        {
          ...ServicePage
        }
    ]
  },
  {
    path:'/a-propos',
    ...App,
    routes:[
        {
          ...AboutPage
        }
    ]
  },
  {
    path:'/mon-profil',
    ...OwnerLayout,
    routes:[
        {
          ...UserProfil
        }
    ]
  },
  {
    path:'/testPage',
    ...App,
    routes:[
        {
          ...TestPage
        }
    ]
  },
  {
    path:'/dashboardHote',
    ...OwnerLayout,
    routes:[
         {
          path:'/dashboardHote/:idUser/mes-biens/:id/mon-tarif',
          ...MyTarif
        },
        {
          path:'/dashboardHote/:idUser/mes-biens/:id/disponibilites',
          ...LogementAvailability
        },
         {
          path:'/dashboardHote/:idUser/mes-biens/:id',
          ...LogementDetailsPage
        },
        {
          path:'/dashboardHote/:idUser/ajouter-un-bien',
           ...AddLogementPage
        },
        {
          path:'/dashboardHote/:idUser/mon-profil',
          ...UserProfil
        },
         {
          path:'/dashboardHote/:idUser/mes-biens',
          ...LogementsListPage
        },
        {
          ...DashboardHote
        }
    ]
  },
  {
    path:'/dashboardVoyageur',
    ...TravellerLayout,
    routes:[
         {
          path:'/dashboardVoyageur/:idUser/bien/:idLogement/expedition',
          ...ExpeditionPage
        },
         {
          path:'/dashboardVoyageur/:idUser/commande/:idCommande/passer-la-commande',
          ...PlaceOrder
        },
        {
          path:'/dashboardVoyageur/:idUser/commande/:idCommande/details',
          ...DisplayCommandePage
        },
         {
          path:'/dashboardVoyageur/:idUser/commande/:idCommande/mode-paiement',
          ...ChoixPaiementPage
        },
        {
          path:'/dashboardVoyageur/:idUser/produits/:idProduct',
          ...DisplayProduct
        },
        {
          path:'/dashboardVoyageur/:idUser/produits',
          ...ProductListPage
        },
       
         {
          path:'/dashboardVoyageur/:idUser/mon-panier',
          ...CartItems
        },
        {
          path:'/dashboardVoyageur/:idUser/ma-location',
          ...RentInfosPage
        },
         {
          path:'/dashboardVoyageur/:idUser/mon-profil',
          ...UserProfil
        },
        {
          ...DashboardVoyageur
        }
    ]
  },
  {
    path:'/',
    exact: true,
    ...App,
      routes:[
        {
          ...HomePage
        }
      ]
  },
  {
    path:'/',
    ...App,
    routes:[
        {
          ...NotFoundPage
        }
    ]
  }


    /*...App,
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
        ...TestPage,
        path: '/testPage'
      },
      {
        ...NotFoundPage
      },
    ]*/
  
];
