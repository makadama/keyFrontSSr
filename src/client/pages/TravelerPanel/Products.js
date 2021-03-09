import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchProduits} from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import requireAuth from '../../components/hocs/requireAuth';
import symbol from  '../../utils/symbol';

class Products extends Component{

	componentDidMount(){
		this.props.fetchProduits();
	}
	render(){
			const {id} = this.props.auth;
			const productItems = this.props.products.map(product=>(
			<div className="col-md-4 mt-2" key={product.id}>
			<div className="thumbnail text-center">
				<a style={{textDecoration:'none'}} href={`/dashboardVoyageur/${id}/produits/${product.id}`}>
					<img style={{width:'200px', height:'150px'}} src={`/media/${product.image}.JPG`} alt={product.titre}/>
					<p style={{color:'orange', fontSize: '1.3em'}}>
					<b style={{color:'black'}}>{product.prix}€</b>
						{product.titre}
					</p>

				</a>
				
			</div>
			</div>
		)
			)


		return(
			<div className="row">
					{productItems}
				</div>
			)
	}
}
function mapStateToProps(state){
    return {
   auth: state.auth,
  errors: state.errors,
  rent: state.rent,
  logements: state.logements, 
  rendezVous: state.rendezVous,
  products: state.products.filteredItems ,
  cartItems: state.cart.items
    };
};



export default  connect(mapStateToProps, {fetchProduits, addToCart} )(
    requireAuth(Products)
  )
