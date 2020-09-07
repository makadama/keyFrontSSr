/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import { connect } from "react-redux";

import './style.css';

const LeftSection = ({auth}) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          style={{backgroundColor:'#3421C0'}}
          onClick={() => setIsShowSidebar(false)}

        />
        <a href="#" style={{marginLeft:'50px', color:'#ed7e24',fontSize:'20px', textDecoration:'none'}}> Mon Compte </a>
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="/dashboardHote"
          >
          <i class="fas fa-home" style={{marginRight:'8px'}}></i>
            Accueil
          </a>
        </li>
        <li>
          <a
            href={`/dashboardHote/${auth.id}/mon-profil`}
          >
          <i class="fas fa-user" style={{marginRight:'8px'}}></i>
            Mon profil
          </a>
        </li>
       
       
        <li>
          <a
            href={`/dashboardHote/${auth.id}/mes-biens`}
          >
          <i class="fas fa-building" style={{marginRight:'8px'}}></i>
            Mes biens
          </a>
        </li>
        <li>
          <a
            href="#"
          >
          <i class="fas fa-envelope" style={{marginRight:'8px'}}></i>
            Contacter Key Service
          </a>
        </li>
      </ul>
    </div>
  );
};


const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
)(LeftSection);
