import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { fetchLogements } from '../actions/logementsActions';
import { fetchCurrentUser } from '../actions/authActions';

class LogementsList extends Component {
	constructor(){
    super()
    this.state={
      val:"",
      nb_bien: 0, 
      nb_line: 0
    }

    
    }
	componentDidMount(){
			
			this.props.fetchLogements(this.props.match.params.idUser);
	
		
	}

	

	head(){
        return(
            <Helmet>
                <title> Mes biens - Keyservice Conciergerie </title>
            </Helmet>
            );
    }

    renderNumberOfBien(){
    	this.state.nb_bien = this.props.logements.logements.length;
    	return this.state.nb_bien;
    }
	renderLogements(){
    return this.props.logements.logements.map(logement => {

      if(logement.fk_ville===1){
          this.state.val="Paris et île de France"
      }
      else if(logement.fk_ville===2){
          this.state.val="Lyon"
      }
      else if(logement.fk_ville===3){
          this.state.val="Bordeau"
      }
      else if(logement.fk_ville===4){
          this.state.val="Marseille"
      }
     this.state.nb_line= this.props.logements.logements.indexOf(logement)+1;
      return ( <tr key={logement.id}>
              <td> {this.state.nb_line} </td>
              <td> {logement.type} </td>
              <td> {logement.adresse} </td>
              <td> {logement.code_postal} </td>
              <td> {this.state.val} </td>
              <td> <a href={`/dashboardHote/${logement.fk_hote}/mes-biens/${logement.id}`} className="btn btn-outline-secondary btn-sm rounded-0"> voir plus</a> </td>
              
            </tr>

        );
    });
  }
  


	render(){
		const { firstname } = this.props.auth;
		const {logements} = this.props.logements;

		return(
		<div>
			<div class="bg-light p-3">
			     
			    <div class="row  d-flex justify-content-start">
			       <div class="col-md-4">
			         <a href={`/dashboardHote/${this.props.auth.id}/ajouter-un-bien`} class="btn btn-success d-block font-weight-bold rounded-0">
			          <i class="fas fa-plus"></i> &nbsp;Ajouter un bien</a>
			       </div>
			       
			    </div>
 			</div> 
  <div class="container-fluid">
    <div class="row"> 
      <div class="col-8 ">
        <h2 style={{backgroundColor: '#ed7e24'}} class="text-white p-2 ">Mes biens</h2>
        <div class="container d-flex justify-content-center">
        
        <table class="table mt-3">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Type</th>
              <th>Adresse</th>
              <th>Code Postal</th>
              <th>Ville</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {this.renderLogements()}
          </tbody>
        </table>
      </div>
    </div>
      <div class="col-md-4 mt-4">
          <div class="card">
            <div class="text-white p-4" style={{backgroundColor:'#00cccb'}}>
              <i class="fas fa-home fa-6x"></i>
              <h2 class="float-right font-weight-bold" style={{fontSize: '50px', textAlign: 'center'}}>{this.renderNumberOfBien()}<span class="d-block">biens</span></h2>
            </div>
            
          </div>
          <div class="card mt-5">
            <div class=" text-white p-4 " style={{backgroundColor:'#ed7e24'}}>
              <i class="fas fa-list-ul fa-6x"></i>
              <h2 class="float-right font-weight-bold" style={{fontSize: '40px', textAlign: 'center'}}>04 <span class="d-block">Categories</span></h2>
            </div>
            
          </div>
          
      </div> 
    </div>
 		</div>
 		</div>
			);
		}
	};

function mapStateToProps(state){
	return { logements: state.logements, auth: state.auth};
}

function loadData(store, idUser){

	return store.dispatch(fetchLogements(idUser));
}


export default { 
	loadData,
	component : connect (mapStateToProps, { fetchLogements, fetchCurrentUser })(LogementsList)
	 };