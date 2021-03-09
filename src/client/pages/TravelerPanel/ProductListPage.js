import React, {Component} from 'react';
//import './styleProductList.css';
import Products from './Products';
import	Filter	from './Filter';
import Cart from './Cart';
import {fetchProduits} from "../../actions/productActions";
import { getCommandeItem }  from "../../actions/commandeItemActions";


class ProductListPage extends Component{


	render(){

		return( 

				<div className="container">
				<h2> les paniers  key service </h2>
				<p>commandez vos paniers! Keyservice vous les livrera dans les plus bref délais </p>
				<hr/>
				<div className="row">
					<div className="col-md-8">
						<Filter/>
					</div>
					<div className="col-md-4">
						<Cart parameter={this.props.match.params.idUser}/>
					</div>
				</div> 
				<div className="row">
					<div className="col-md-12">
						<Products/>
					</div>
				</div>


			</div>
			)
	}
}

function loadData(store, idUser){
	return Promise.all([
    store.dispatch( fetchProduits()),
    store.dispatch( getCommandeItem(idUser) ),
  ]); 

}
export default {
	loadData,
	component: ProductListPage
} 