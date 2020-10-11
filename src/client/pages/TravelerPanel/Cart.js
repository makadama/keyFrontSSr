import React , {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { removeFromCart, addToCart } from "../../actions/cartActions";
import { getCommandeItem } from '../../actions/commandeItemActions';
import symbol from  '../../utils/symbol';
//import './styleCart.css';

class Cart extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }
componentDidMount(){
  this.props.getCommandeItem(this.props.parameter);
}
 render(){

 			const {commandeItems} = this.props.commandeItems;
      const {id} = this.props.auth;
      console.log(commandeItems)

 	return(
 			<div data-test="cartComponent">
        
        {commandeItems.length === 0 ? (
          <div data-test="noProductFound">
              <i style={{marginRight:'5px',color:'#ed7e24', fontSize:'30px'}} className="fas fa-shopping-cart"></i>
              Basket is empty
          </div>
          
        ) : (
          <div data-test="weFoundProduct">
            
              <i style={{marginRight:'5px', whidth:'150px', height:'150px', color:'#ed7e24', fontSize:'30px'}} className="fas fa-shopping-cart"></i>
              {commandeItems.length} items. <a href={`/dashboardVoyageur/${id}/mon-panier
              `} >Voir mon panier!
            </a>
          </div>
        )}
        
      </div>
 			)
}

}
Cart.propTypes = {
  parameter: PropTypes.string
 
};

const mapStateToProps = state =>({
	commandeItems: state.commandeItems,
  auth: state.auth 
})

export default connect(mapStateToProps, {getCommandeItem}) (Cart); 