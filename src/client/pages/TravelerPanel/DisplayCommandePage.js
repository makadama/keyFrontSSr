import React , {Component} from 'react';
import { connect } from 'react-redux';
import { getCommandeItem } from "../../actions/commandeItemActions";
import { getOneCommande, updateByTotal } from "../../actions/commandeActions";
import { addCommandeDetail } from  "../../actions/commandeDetailActions";
import { Link, withRouter } from 'react-router-dom';
import './styleDisplayCommande.css';

class DisplayCommandePage extends Component{
    constructor(){
      super()
      this.state={

      }
      this.placeOrderHandler= this.placeOrderHandler.bind(this);
    }
    componentDidMount(){
      this.props.getCommandeItem(this.props.match.params.idUser).then(()=>{
        this.props.getOneCommande(this.props.match.params.idCommande)
      });
}
    placeOrderHandler(e){
      e.preventDefault();
      
       const itemsPrix = this.props.commandeItems.commandeItems.reduce((a, c) => a + c.prixUnitaire * c.quantite, 0);
       const taxes = this.props.commande.commande.taxe;
      const totalPrice2 = itemsPrix + taxes;
       this.props.updateByTotal(this.props.match.params.idCommande, totalPrice2).then(()=>{
          for(let i=0; i<(this.props.commandeItems.commandeItems.length); i++){
            const detail={
              nom: this.props.commandeItems.commandeItems[i].nom,
              quantite: this.props.commandeItems.commandeItems[i].quantite,
              prix: this.props.commandeItems.commandeItems[i].prix,
              image: this.props.commandeItems.commandeItems[i].image,
              description: this.props.commandeItems.commandeItems[i].description,
              qtEnStock: this.props.commandeItems.commandeItems[i].qtEnStock,
              prixUnitaire: this.props.commandeItems.commandeItems[i].prixUnitaire,
              fk_commande : this.props.match.params.idCommande,
              fk_produit: this.props.commandeItems.commandeItems[i].fk_produit
            }

          this.props.addCommandeDetail(detail);
          }
       }).then(()=>{
          this.props.history.push(`/dashboardVoyageur/${this.props.auth.id}/commande/${this.props.match.params.idCommande}/passer-la-commande`);
       })
    }

 render(){
      
      const {commandeItems}= this.props.commandeItems;
      console.log(commandeItems);
      const {commande} = this.props.commande;
      console.log(commande);
      const itemsPrice = commandeItems.reduce((a, c) => a + c.prix, 0);
      const totalPrice = itemsPrice + commande.taxe;
 	return(
 			<div >
            <div className="placeorder">
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
                <li>
                  <button className="button primary full-width" onClick={this.placeOrderHandler} >Valider</button>
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

                
          
          </div>


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
  component: connect(mapStateToProps, {getOneCommande, getCommandeItem, updateByTotal, addCommandeDetail})(DisplayCommandePage) 
}