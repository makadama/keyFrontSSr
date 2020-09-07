import React , {Component} from 'react';
import { connect } from 'react-redux';
import { sortProduits } from "../../actions/productActions"

class Filter extends Component{
 render(){
 	return(
 			<div className="row">
 				<div className="col-md-4">
 					{this.props.filteredProducts.length} produits trouvés.
 				</div>
 				<div className="col-md-4">
 					<label>
 					classer du:
 						<select className="from-control" value={this.props.sort} onChange={(e) =>this.props.sortProduits(this.props.filteredProducts, e.target.value)}>
 							<option value=""> select </option>
 							<option value="lowest">	moins au plus cher   </option>
 							<option value="highest"> plus au moins cher </option>
 						</select>
 					</label>
 				</div>

 			 </div>
 		)
 }
}
const mapStateToProps = state => ({
	products: state.products.items,
	filteredProducts: state.products.filteredItems,
	sort: state.products.sort
})
export default connect(mapStateToProps, { sortProduits	})(Filter); 