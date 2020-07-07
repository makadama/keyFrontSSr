import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogements } from '../actions/logementsActions';
import { fetchCurrentUser } from '../actions/authActions';

class LogementsList extends Component {
	componentDidMount(){
			const { id } = this.props.auth;
			this.props.fetchLogements(id);
	
		
	}

	renderLogements(){
		return this.props.logements.map(logement => {
			return <li key={logement.id}>{logement.adresse}</li>
		});
	}

	render(){
		const { firstname } = this.props.auth;
		return(
			<div>


			
				Here is a big list of logements of {firstname}:
				<ul>{this.renderLogements()}</ul>
			</div>
			);
		}
	};

function mapStateToProps(state){
	return { logements: state.logements, auth: state.auth};
}

function loadData(store, id){

	return store.dispatch(fetchLogements(id));
}


export default { 
	loadData,
	component : connect (mapStateToProps, { fetchLogements, fetchCurrentUser })(LogementsList)
	 };