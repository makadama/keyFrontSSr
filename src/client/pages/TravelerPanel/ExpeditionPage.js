import React, {Component} from 'react';
import { getRentByUser } from '../../actions/rentActions';
import { getLogementById } from '../../actions/logementsActions';
import { createCommande } from '../../actions/commandeActions';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import './styleExpeditionPage.css';



class ExpeditionPage extends Component{
	constructor(){
		super()
		this.state={
			nom:'',
			email:'',
			numero:'',
			adresse:'',
			codePostal:'',
			ville:'',
			fk_voyageur:'',
			errors:{}
		}
		this.onChange= this.onChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}


    componentDidMount(){
    	if(this.props.match.params.idUser){
     	this.props.getRentByUser(this.props.match.params.idUser)
     }
    }

    onChange (e){
		this.setState({[e.target.name]:e.target.value})
	}

	
	renderVilleName(val){
     if(val.logements.logement.fk_ville===1){
          return "Paris et île de France"
      }
      else if(val.logements.logement.fk_ville===2){
          return "Lyon"
      }
      else if(val.logements.logement.fk_ville===3){
          return "Bordeau"
      }
      else if(val.logements.logement.fk_ville===4){
          return "Marseille"
      }
  }

componentWillReceiveProps(nextProps){
			
    this.setState({
      nom: nextProps.auth.firstname,
      email: nextProps.auth.email,
      numero: nextProps.auth.telephone,
      adresse: nextProps.logements.logement.adresse,
      codePostal: nextProps.logements.logement.code_postal,
      ville: this.renderVilleName(nextProps),
      fk_voyageur: nextProps.auth.id
    });
  }

  submitHandler(e){
		e.preventDefault();
		const newCommande={
			nom: this.state.nom,
			email: this.state.email,
			numero: this.state.numero,
			adresse: this.state.adresse,
			codePostal: this.state.codePostal,
			ville: this.state.ville,
			fk_voyageur: this.state.fk_voyageur
		}
		console.log(newCommande);
		this.props.createCommande(newCommande, this.props.history)
	}


	render(){
			const { id } = this.props.auth;
			console.log(this.props.commandeItems);
			console.log(this.props.auth);
			const {logement} = this.props.logements;
			const { rent } = this.props.rent;
		return( 
			
				<div className="expedition container">
   
				    <div className="form">
				      <form onSubmit={this.submitHandler} >
				        <ul className="form-container">
				          <li>
				            <h2>Expédition</h2>
				          </li>

				          <li>
				            <label htmlFor="nom">
				              Prénom
				          	</label>
				            <input type="text" name="nom" id="nom" value={this.state.nom} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          <li>
				            <label htmlFor="email">
				              Email
				          	</label>
				            <input type="text" name="email" id="email" value={this.state.email} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          <li>
				            <label htmlFor="numero">
				              Téléphone
				          	</label>
				            <input type="text" name="numero" id="numero" value={this.state.numero} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          <li>
				            <label htmlFor="adresse">
				              Adresse
				          </label>
				            <input type="text" name="adresse" id="adresse" value={this.state.adresse} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          <li>
				            <label htmlFor="codePostal">
				              Code Postal
				          </label>
				            <input type="text" name="codePostal" id="codePostal" value={this.state.codePostal} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          <li>
				            <label htmlFor="ville">
				              Ville
				          </label>
				            <input type="text" name="ville" id="ville" value={this.state.ville} onChange={this.onChange}  disabled>
				            </input>
				          </li>

				          

				          
				          <li>
				            <button type="submit" className="button primary">Continue</button>
				          </li>

				        </ul>
				      </form>
				    </div>
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
  commandeItems: state.commandeItems,
  commande: state.commande
    };
};


function loadData(store, idUser, idLogement){

   return Promise.all([
    store.dispatch( getRentByUser(idUser) ),
    store.dispatch( getLogementById(idLogement)),
  ]); 

   
}


export default {
	loadData,
	component: connect(mapStateToProps, {createCommande,getRentByUser, getLogementById})(withRouter(ExpeditionPage))
}