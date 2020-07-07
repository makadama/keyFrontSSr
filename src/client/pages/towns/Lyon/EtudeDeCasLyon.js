import React, { Component } from 'react';
import appt from '../../../assets/appt3.jpg';

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class EtudeDeCasLyon extends Component  {
    render(){
	return(
        <section style={{height:"auto", marginBottom:'5px',backgroundColor: '#F4F6F6'}}>
        	<div className="container">
        		<div className="row">
        			<div className='col-md-6 col-lg-6'>
                        
        				<p className="align-self-center" style={{marginTop:"10%", fontSize:"20px"}}>
        					"L' equipe KeyService est vraiment pro. Etant a l’étranger j'ai decide de leur confier mon studio à Lyon et je ne regrette pas un seul instant. Ils gerent tout comme si j'etais sur place. Leur application contient un maximum d'information, et
                  historique des transactions. Ils sont également reactif et me tiennent informer régulièrement.
                            </p>
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

export default EtudeDeCasLyon;
