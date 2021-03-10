import React, { Component } from 'react';
import './StyleAllServices.css';
import  annonce from  '../../assets/Annonce.png';
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
                                <p>Nous optimisons vos annonces pour une visibilité maximale sur les sites spécialisés : Airbnb, Abritel-HomeAway et Booking. 
                                Nous gérons les demandes d’informations, les réservations et les avis de vos voyageurs.
                                Nous optimisons le pricing pour trouver le prix le plus adapté à chaque période de l’année, vous assurant ainsi un taux de remplissage maximum.</p>
                                <a href="/inscription" class="boxed-btn">Devenir Hôte</a>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center  mrgn1">
                        <div class="col-xl-6 col-md-6">
                            <div class="section_title">
                                <h4>checkin et checkout</h4>
                                 <div class="seperator2"></div>
                                <p>Nous accueillons vos locataires. Nous leur présenterons la location. Nous remettrons et retirerons les clés respectivement à l'arrivée et au
                                départ des voyageurs. Nous prendrons rendez-vous avec le propriétaire pour la remise de clés.
                                </p>
                                <a href="/inscription" class="boxed-btn">Devenir Hôte</a>
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
                                <p>Durant tout le séjour des locataires, Keyservice sera à leur disposition. Nous resterons en contact avec le locataire durant tout leur séjour. nous 
                                leurs informeront des meilleurs endroits du coin. Nous leur ferons des courses s'ils commandent des produits de nos partenaires à partir de leur espace membre.
                                </p>
                                <a href="/inscription" class="boxed-btn">Devenir Hôte</a>
                            </div>
                        </div>
                    </div>
                    <div class="row align-items-center  mrgn1">
                        <div class="col-xl-6 col-md-6">
                            <div class="section_title">
                                <h4>Ménage</h4>
                                 <div class="seperator2"></div>
                                <p>Nous veillons à ce que les ménages soient réalisés à l’aune des standards hôteliers. Nous nous chargeons d’accueillir vos locataires 
                                et de réaliser les prestations de ménage à chaque entrée et chaque sortie. Nous ferons le nettoyage de toutes
                                les pièces, le dépoussiérage des  meubles,  la vérification des canapés et matelas, l'aspiration et le nettoyage des sols, les  moquettes, le tapis
                                le nettoyage de la cuisine, de la salle de bain et des toilettes, la Vérification des poubelles...
         </p>
                                <a href="/inscription" class="boxed-btn">Devenir Hôte</a>
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
                                <p>Au moment où le propriétaire nous remet ses clés, nous prenons aussi son inventaire. lors du départ de chaque voyageur, Notre concierge fera un etat des lieux. l'inventaire 
                                sera retransmis au propriétaire pour l'assurer de la bonne gestion de son bien</p>
                                <a href="/inscription" class="boxed-btn">Devenir Hôte</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
			)
	}
}
export default AllServices;