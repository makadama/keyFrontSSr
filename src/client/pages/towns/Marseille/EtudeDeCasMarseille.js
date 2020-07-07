import React, { Component } from 'react';
import appt from '../../../assets/appt4.jpg';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class EtudeDeCasMarseille extends Component  {
    render(){
	return(
        <section style={{height:"auto", marginBottom:'5px',backgroundColor: '#F4F6F6'}}>
        	<div className="container">
        		<div className="row justify-content-center">
        			<div className='col-md-6 col-lg-6 col-xs-12'>
                        
        				<p className="align-self-center" style={{marginTop:"10%", fontSize:"20px", height:'auto'}}>
        					"En seulement trois mois, j'ai  obtenu 15752€
Grâce au service de KeyService, j' ai optimisé son annonce sur Airbnb, Abritel, booking...
                            </p>
                        <span> Celine, cliente KeyService</span>
        			</div>
                    <div className='col-md-6 col-lg-6 col-xs-12'>
                       <img src={appt} style={{height:"auto", width:"100%", marginTop:"5px", marginLeft:'auto'}}/>
                        
                        
                    </div>
        		</div>
        	</div>
        </section>
		)
}
}

export default EtudeDeCasMarseille;
