import React , {Component} from 'react';
import { connect } from 'react-redux';
import { getCommandeItem, deleteCommandeItem, updateByQt, updateCommandeItem  } from '../../actions/commandeItemActions';
import { getRentByUser } from '../../actions/rentActions';
import symbol from  '../../utils/symbol';
import { Link } from 'react-router-dom';
import './cartItemsStyle.css';

class CartItems extends Component{
  constructor(){
    super()
    this.state={
      qty: 1
    }
   
  }
  componentDidMount(){
    if(this.props.match.params.idUser){
    this.props.getCommandeItem(this.props.match.params.idUser)
  }
  }

  onChange (val1, val2){
        this.props.updateByQt(val1, val2);
    }

  handleDeleteCommandeItem(val1, val2, e){
   e.preventDefault();
    this.props.deleteCommandeItem(val1, val2);
  }

  goToShipping(e){
    e.preventDefault();
    this.props.history.push(`/dashboardVoyageur/${this.props.auth.id}/bien/${this.props.rent.rent.fk_logement}/expedition`);
  }

 render(){
    const {commandeItems} = this.props.commandeItems;
    const {id} = this.props.auth;
    const { rent } = this.props.rent;
      let showItems;
      let showTotal;
      if(commandeItems){
    showItems = this.props.commandeItems.commandeItems.map(commandeItem => {
             return( <li key={commandeItem.id}>
                <div className="cart-image">
                  <img src={`/media/${commandeItem.image}.JPG`} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to="">
                      {commandeItem.titre}
                    </Link>

                  </div>
                  <div>
                    Qte:
                    <select  value={commandeItem.quantite} onChange={(e)=>this.onChange(commandeItem.id, e.target.value)} >
                            {[...Array(commandeItem.qtEnStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                    </select>
                    <button type="button" className="button" onClick={this.handleDeleteCommandeItem.bind(this, commandeItem.id, id)}>
                      Annuler
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  {commandeItem.prix}€
                </div>
              </li>)

           }
            )
    showTotal =( <h3>
        Total ( {commandeItems.reduce((a, c) => a + c.quantite, 0)} items)
        :
          {commandeItems.reduce((a, c) => a + c.prixUnitaire * c.quantite, 0)}€
      </h3>)

}
 			
 	return(
 			<div className="cart">
    <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Prix
          </div>
        </li>
        {showItems}
        
      </ul>

    </div>
    <div className="cart-action">
      {showTotal}
      <button  className="button primary full-width"  onClick={this.goToShipping.bind(this)} >
        Passer au paiement
      </button>

    </div>

  </div>
 			)
}
}
const mapStateToProps = state =>({
	commandeItems: state.commandeItems,
  auth: state.auth, 
  errors: state.errors,
  rent: state.rent,
})

function loadData(store, idUser){
  return Promise.all([
    store.dispatch( getRentByUser(idUser) ),
    store.dispatch( getCommandeItem(idUser)),
  ]); 
}

export default{
  loadData,
  component: connect(mapStateToProps, {getRentByUser, getCommandeItem, deleteCommandeItem, updateByQt, updateCommandeItem  }) (CartItems)
} 