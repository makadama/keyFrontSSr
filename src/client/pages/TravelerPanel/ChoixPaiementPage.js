import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { updateByPay } from '../../actions/commandeActions';
import './styleChoixPaiement.css';


class ChoixPaiementPage extends Component{
	constructor(){
		super()
		this.state={
			modePaiement: ''
		}
		this.onChange= this.onChange.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}
 	onChange (e){
		this.setState({[e.target.name]:e.target.value})
	}

	submitHandler(e){
		e.preventDefault();
		const newValue={
			modePaiement: this.state.modePaiement
		}
		this.props.updateByPay(this.props.match.params.idCommande, newValue, this.props.history)
	}
	render(){

		return( 
			
			<div className="container paying">
				<div className="form">
			        <form onSubmit={this.submitHandler}>
			          <ul className="form-container">
			            <li>
			              <h2>Paiement</h2>
			            </li>

			            <li>
			              <div>
			                <input
			                  type="radio"
			                  name="modePaiement"
			                  id="modePaiement"
			                  value="paypal"
			                  onChange={this.onChange}
			                required></input>
			                <label for="modePaiement">Paypal</label>
			              </div>
			            </li>

			            <li>
			              <button type="submit" className="button primary">
			                Continuer
			              </button>
			            </li>
			          </ul>
			        </form>
      			</div>

			</div>
			)
	}
}
const mapStateToProps = state =>({
  auth: state.auth, 
  errors: state.errors
})

export default {
	
	component: connect(mapStateToProps, {updateByPay})(withRouter(ChoixPaiementPage))
}