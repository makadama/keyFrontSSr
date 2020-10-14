import React , {Component} from 'react';
import { connect } from 'react-redux';
import { getCommandeItem } from "../../actions/commandeItemActions";
import { getOneCommande, updateByTotal, finalUpdate } from "../../actions/commandeActions";
import { deleteCommandeItem } from "../../actions/commandeItemActions";
import { addCommandeDetail } from  "../../actions/commandeDetailActions";
import { Link, withRouter } from 'react-router-dom';
import { Result, Empty } from 'antd';
import PaypalPage from './PaypalPage';
import axios from 'axios';
import './styleDisplayCommande.css';


class PlaceOrder extends Component{
    constructor(){
      super()
      this.state={
        isEnabled: false,
        showSuccess: false
      }
      
     
    }
    componentDidMount(){
        if (this.props.commandeItems.commandeItems.length===0) {
    
              this.props.history.push(`/dashboardVoyageur/${this.props.auth.id}/produits`);
          }

      this.setState({isEnabled: true})
      this.props.getCommandeItem(this.props.match.params.idUser).then(()=>{
         this.props.getOneCommande(this.props.match.params.idCommande)
      })
    
}

  componentWillReceiveProps(nextProps) {
       if (nextProps.commandeItems.commandeItems.length===0) {
    
              this.props.history.push(`/dashboardVoyageur/${this.props.auth.id}/produits`);
          }
   
  }


transactionSuccess() {
      console.log('it is an imagination');
      
      }

  

  

  transactionError(){
    console.log('paypal error');
  }

  transactionCanceled(){
    console.log('Transaction Canceled')
  }

 render(){
      
      const {commandeItems}= this.props.commandeItems;
      console.log(commandeItems);
      const {id} = this.props.auth;
      const {commande} = this.props.commande;
     
      console.log(commande);
      const itemsPrice = commandeItems.reduce((a, c) => a + c.prix , 0);
      const totalPrice = itemsPrice + commande.taxe;
      const showSuccess = this.state;

      

     

     
 	return(
 			<div >
          {this.state.showSuccess ?
                        (<Result
                            status="success"
                            title="Successfully Purchased Items"
                        /> ):
            (<div className="placeorder">
              <div className="placeorder-info">
                <div>
                  <h3>
                    Expedition
                  </h3>
                  <div>
                    {commande.adresse}, {commande.codePostal},
                    {commande.ville}
                  </div>
                </div>
                <div>
                  <h3>Paiement</h3>
                  <div>
                    Methode de paiement: {commande.modePaiement}
                  </div>
                </div>
                <div>
                  <ul className="cart-list-container">
                    <li>
                      <h3>
                        Poduits
                  </h3>
                      <div>
                        Prix
                  </div>
                    </li>
                    {
                      commandeItems.length === 0 ?
                        <div>
                          Cart is empty
                  </div>
                        :
                        commandeItems.map(item =>
                          <li key={item.id}>
                            <div className="cart-image">
                              <img src={`/media/${item.image}.JPG`} alt="product" />
                            </div>
                            <div className="cart-name">
                              <div>
                                <Link to="">
                                  {item.titre}
                               </Link>

                              </div>
                              <div>
                                Qty: {item.quantite}
                              </div>
                            </div>
                            <div className="cart-price">
                              {item.prix}€
                            </div>
                          </li>
                        )
                    }
                  </ul>
                </div>

              
              </div>
              <div className="placeorder-action">
              <ul>
                <li className="payButton">
                    {this.state.isEnabled ? (<PaypalPage toPay={totalPrice}  whenSuccess={showSuccess} infoCommandeItem={commandeItems} infoCommande={commande} history={this.props.history} onSuccess={this.transactionSuccess}
                  transactionError={this.transactionError} transactionCanceled={this.transactionCanceled}/>) : ('Loading....')}
                  
                </li>
                <li>
                  <h3>Votre commande</h3>
                </li>
                <li>
                  <div>produits</div>
                  <div>{itemsPrice}€</div>
                </li>
                <li>
                  <div>Taxe</div>
                  <div>{commande.taxe}€</div>
                </li>
                <li>
                  <div>Total</div>
                  <div>{totalPrice}€</div>
                </li>
              </ul>



      </div>

                
          
          </div>)}


      </div>
 			)

}
}

const mapStateToProps = state =>({
  commandeItems: state.commandeItems,
  auth: state.auth, 
  commande: state.commande
})

function loadData(store, idUser, idCommande){
  return Promise.all([
    store.dispatch( getCommandeItem(idUser) ),
    store.dispatch( getOneCommande(idCommande)),
  ]); 
}

export default {
  loadData,
  component: connect(mapStateToProps, {getOneCommande, getCommandeItem, finalUpdate})(PlaceOrder) 
}