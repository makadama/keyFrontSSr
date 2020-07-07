import React, { Component } from 'react';
import './StyleAllServices.css';
import  annonce from  '../../assets/annonce.png';
import checkin from '../../assets/checkin.png';
import communication from  '../../assets/communication.jpg';
import menage from  '../../assets/menage.png';
import etat from '../../assets/etat.png';


class AllServices extends Component{
	render(){
		return(
			<div class="lastest_project">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title  mrgn2">
                        <h3>Nos Services</h3>
                        <div class="seperator"></div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center  mrgn1">
                <div class="col-xl-6 col-md-6">
                    <div class="single_project_thumb">
                        <img src={annonce} alt=""/>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="section_title">
                        <h4>Annonce et optimisation des prix</h4>
                         <div class="seperator2"></div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
                            quis ipsum suspendisse.</p>
                        <a href="project-details.html" class="boxed-btn">Voir nos Tarifs</a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center  mrgn1">
                <div class="col-xl-6 col-md-6">
                    <div class="section_title">
                        <h4>checkin et checkout</h4>
                         <div class="seperator2"></div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
                            quis ipsum suspendisse.</p>
                        <a href="project-details.html" class="boxed-btn">Voir nos Tarifs</a>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="single_project_thumb">
                        <img src={checkin} alt=""/>
                    </div>
                </div>
            </div>
            <div class="row align-items-center  mrgn1">
                <div class="col-xl-6 col-md-6">
                    <div class="single_project_thumb">
                        <img src={communication} alt=""/>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="section_title">
                       <h4>Communication avec le voyageur</h4>
                         <div class="seperator2"></div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
                            quis ipsum suspendisse.</p>
                        <a href="project-details.html" class="boxed-btn">Voir nos Tarifs</a>
                    </div>
                </div>
            </div>
            <div class="row align-items-center  mrgn1">
                <div class="col-xl-6 col-md-6">
                    <div class="section_title">
                        <h4>Ménage</h4>
                         <div class="seperator2"></div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua
                            quis ipsum suspendisse.</p>
                        <a href="project-details.html" class="boxed-btn">Voir nos Tarifs</a>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="single_project_thumb">
                        <img src={menage} alt=""/>
                    </div>
                </div>
            </div>
            <div class="row align-items-center  mrgn1">
                <div class="col-xl-6 col-md-6">
                    <div class="single_project_thumb">
                        <img src={etat} alt=""/>
                    </div>
                </div>
                <div class="col-xl-5 offset-xl-1 col-md-6">
                    <div class="section_title">
                       <h4>Etat des lieux</h4>
                         <div class="seperator2"></div>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua
                            quis ipsum suspendisse.</p>
                        <a href="project-details.html" class="boxed-btn">Voir nos Tarifs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
			)
	}
}
export default AllServices;