import React, {Component} from 'react';
import { getProduitById } from "../../actions/productActions";
import { addCommandeItem } from "../../actions/commandeItemActions";
import { connect } from "react-redux";
import symbol from  '../../utils/symbol';
import './displayProductStyle.css';
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

		this.onChange=this.onChange.bind(this)
		
		}

onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}


componentDidMount(){
			this.props.getProduitById(this.props.match.params.idProduct)
	}

handleAddToCart(e){
	e.preventDefault();
	const orderItem={
		nom: this.props.product.titre,
		prix: this.props.product.prix*this.state.qty,
		image: this.props.product.image,
		fk_voyageur: this.props.match.params.idUser,
		quantite: this.state.qty,
		qtEnStock: this.props.product.quantite,
		prixUnitaire: this.props.product.prix,
		fk_produit: this.props.product.id
	}
	this.props.addCommandeItem(orderItem).then(()=>{
		this.props.history.push(`/dashboardVoyageur/${this.props.auth.id}/mon-panier`)
	})
}

	render(){
			const {id} = this.props.auth;
			const productItem = this.props.product;
			
		return( 
			
				<div className="container">
					<div className="details">
						<div className="details-image">
							<img src={`/media/${productItem.image}.jpg`} alt="product"/>

						</div>
						<div className="details-info">
							<ul>
								<li>
									<h4>{productItem.titre}</h4>
								</li>
								<li>
									prix: <b>{symbol.formatCurrency(productItem.prix)}</b>
								</li>
								<li>
									Description:
									<div>{productItem.description}</div>
								</li>
								
							</ul>
						</div>
						<div className="details-action">
							<ul>
								
								<li>
									status:{' '}
									{productItem.quantite > 0? 'En Stock': 'Indisponible'}
								</li>
								<li>
				                  Qty:{' '}
				                  <select
				                    value={this.state.qty}
				                    onChange={this.onChange} name='qty'
				                  >
				                    {[...Array(productItem.quantite).keys()].map((x) => (
				                      <option key={x + 1} value={x + 1}>
				                        {x + 1}
				                      </option>
				                    ))}
				                  </select>
                				</li>
                				 <li>
				                  {productItem.quantite > 0 && (
				                  	
				                    <button 
				                    	onClick={this.handleAddToCart.bind(this)}
				                      className="button primary"
				                    >
				                      Add to Cart
				                    </button>
				                  )}
                				</li>
							</ul>
						</div>
					</div>	
				
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