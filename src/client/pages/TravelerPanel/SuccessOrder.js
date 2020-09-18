import React , {Component} from 'react';
import { connect } from 'react-redux';
import { sortProduits } from "../../actions/productActions"
import { Result, Empty } from 'antd';

class SuccessOrder extends Component{
 render(){
 	return(
 		<div className="container">
 			<div className="row">
 				<div className="col d-flex justify-content-center">
 					<i className="fas fa-check-circle" style={{color:'white',  fontSize:'30px', backgroundColor:'green', textAlign: 'center',
    					display: 'block', width:'55px', height:'55px',borderRadius: '50%', lineHeight:'55px',  margin:'auto' }}></i>
    
 				</div>
 			 </div>
 			 <div className="row">
 			 	<div className="col d-flex justify-content-center">
 					<p> achat et paiement faits avec succès!</p>
 				</div>
 			 </div>
 		</div>
 		)
 }
}

export default {
	component: SuccessOrder
}