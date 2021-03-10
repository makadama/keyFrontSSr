import React, {Component} from 'react';
import { getProduitById } from "../../actions/productActions";
import { addCommandeItem } from "../../actions/commandeItemActions";
import { connect } from "react-redux";
import symbol from  '../../utils/symbol';
import './StyleDisplayProduct.css';
//import './styleProductList.css';




class DisplayProduct extends Component{
	constructor(){
		super()
		this.state={
			qty:1,
			quantite: '',
			qtEnStock: '',
			nom: '',
			prix:'',
			image:'',
			fk_voyageur: '',
			prixUnitaire: '',
			fk_produit: '',
			errors:{}
		}


		}


	componentDidMount(){
			this.props.getProduitById(this.props.match.params.idProduct)
	}

	render(){
			const productItem = this.props.product;
			console.log(productItem);

		return( 

				<div className="container">
					   the display container
				</div>
			)
	}
}

function mapStateToProps(state){
	  return {
   auth: state.auth,
  errors: state.errors,
  product: state.products.item,
  products: state.products.filteredItems ,
  cartItems: state.cart.items
    };
}

function loadData(store, idProduct){

  return store.dispatch(getProduitById(idProduct));
}


export default {
	loadData,
	component : connect (mapStateToProps, {getProduitById, addCommandeItem})(DisplayProduct)
} 