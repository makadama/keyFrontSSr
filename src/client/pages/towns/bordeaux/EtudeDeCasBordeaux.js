import React, { Component } from 'react';
import appt from '../../../assets/appt5.jpg';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class EtudeDeCasBordeaux extends Component  {
    render(){
	return(
        <section style={{height:"auto", marginBottom:'5px',backgroundColor: '#F4F6F6'}}>
        	<div className="container">
        		<div className="row">
        			<div className='col-md-6 col-lg-6'>
                        
        				<p className="align-self-center" style={{marginTop:"10%", fontSize:"20px"}}>
        					"Agence très performante pour valoriser votre résidence principale ou secondaire via les différentes centrales de réservation. Une équipe professionnelle, agréable et réactive</p>
                        <span> Michel, client KeyService</span>
        			</div>
                    <div className='col-md-6 col-lg-6'>
                       <img src={appt} style={{height:"auto", width:"100%", marginTop:"5px", marginLeft:'auto'}}/>
                        
                        
                    </div>
        		</div>
        	</div>
        </section>
		)
}
}

export default EtudeDeCasBordeaux;
