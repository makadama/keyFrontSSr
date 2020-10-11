import React, {Component} from 'react';
import { getRentByUser } from '../../actions/rentActions';
import { getLogementById } from '../../actions/logementsActions';
import { connect } from "react-redux";
import { addrdv, updaterdv, getrdv, getonerdv, deleterdv } from "../../actions/rendezVousActions";
import requireAuth from '../../components/hocs/requireAuth';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import classnames from "classnames";


class RentInfosPage extends Component{
	constructor(){
		super()
		this.state={
			date_rdv:'',
			heure_rdvTT:'',
			type_rdv:'',
			fk_logement:'',
			fk_voyageur:'',
			 editDisabled: false,
			errors:{}
		}
		this.onChange= this.onChange.bind(this);
		this.handleChange= this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		this.props.getRentByUser(this.props.match.params.idUser).then(()=>{
			this.props.getrdv(this.props.match.params.idUser);
		});
	}

	componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

	 handleChange(date) {
    this.setState({
      heure_rdvTT: date
    });
  };

  onChange (e){
		this.setState({[e.target.name]:e.target.value})
		}

	renderVilleName(){
     if(this.props.logements.logement.fk_ville===1){
          return "Paris et île de France"
      }
      else if(this.props.logements.logement.fk_ville===2){
          return "Lyon"
      }
      else if(this.props.logements.logement.fk_ville===3){
          return "Bordeau"
      }
      else if(this.props.logements.logement.fk_ville===4){
          return "Marseille"
      }
  }
  
 	renderDate(la_date){
 		var date = new Date(la_date).toLocaleDateString();
 		return  date;
 	}

//désactiver l'ajoute si on a les deux rdv
 	onAdd(){
 		if(this.props.rendezVous.rdvs){
 			if(this.props.rendezVous.rdvs.length==2){
 				return 'disabled';
 			}
 			else{
 				return false;
 			}

 		}
 	}

 	cancelEnabled(date){
 		if(date<=Date.now()){
 			return 'disabled';
 		}
 		else{
 			return false;
 		}
 	}

 	handleSubmit(e) {
    e.preventDefault();
    const rdvData={
    	heure_rdvTT: this.state.heure_rdvTT,
    	type_rdv: this.state.type_rdv,
    	fk_logement: this.props.logements.logement.fk_logement,
    	fk_voyageur: this.props.auth.id
    }
    this.props.addrdv(rdvData);

  }

  onDelete(val, val2, e){
    e.preventDefault();
    this.props.deleterdv(val, val2);
   
  }

render(){
		 const { id } = this.props.auth;
		 console.log(id);
		 console.log(Date.now());
		  const {logement} = this.props.logements;
		  console.log(logement);
		 const { rent } = this.props.rent;
		 console.log(rent);
       const { errors } = this.state;
       const { rdvs } = this.props.rendezVous;
       console.log(rdvs);
       const { rdv } = this.props.rendezVous;
       let renderRDVs;
       if(rdvs){
       		renderRDVs=rdvs.map(oneRdv => {
      				this.state.nb_line= this.props.rendezVous.rdvs.indexOf(oneRdv)+1;
                       return (<tr   key={oneRdv.id}>

                          <td> {this.state.nb_line} </td>
                          <td> {new Date(oneRdv.date_rdv).toLocaleDateString()} </td>
                          <td> {oneRdv.heure_rdv}</td>
                          <td> {oneRdv.type_rdv} </td>
                         <td>
                          <button  className="btn btn-outline-danger mr-1 rounded-0" disabled={this.cancelEnabled(new Date(oneRdv.date_rdv))} onClick={this.onDelete.bind(this, oneRdv.id, oneRdv.fk_voyageur)}>
                             Annuler
                          </button>
                      </td>
                        </tr>
                      )
                      })
       }

  return (
    <div data-test="rentInfosComponent">
     	<div className="container">
     		<div className="row">
     			<div className="col-12">
		        	<div className="card bg-light mb-3">
		                <div className="card-body">
		                	<p> adresse: {logement.adresse}</p>
		                	<p> code Postal: {logement.code_postal}</p>
		                	<p> région: {this.renderVilleName()} </p>
		                    <p>date d'entrée: {this.renderDate(rent.date_debut)}</p>
		                    <p>date de sortie: {this.renderDate(rent.date_fin)}</p>
		                </div>
		          </div>
		        </div>
		        <hr style={{width:'600px'}}/>
	        </div>
	        <div className="row">
	        	
	        	<br/>
	        	
	        	<div className="col-md-12 mt-5 mx-auto">

                      <form noValidate onSubmit={this.handleSubmit}>
                      		<p> choisir vos deux dates de rendez-vous pour la remise et le retrait des clés: </p>
                          <div className="row">
                            <div className="col-md-4 col-lg-4">
                                  <div className="form-group">
                                    <label>Heure de rendez-vous* </label>
                                    <DatePicker
                                    	
                                      className={classnames("form-control",{
	                  	invalid: errors.heure_rdvTT
	                  })}
                                      selected={this.state.heure_rdvTT}
                                      onChange={ date=>this.handleChange(date)}
                                      name="heure_rdvTT"
                                      showTimeSelect
      								  showTimeSelectOnly
      								  timeIntervals={30}
     								  timeCaption="Horaire"
     								  dateFormat="HH:mm"
     								  timeFormat="HH:mm"
     								  value={this.state.heure_rdvTT}
     								   disabled={this.onAdd()}
     								   />
     								   <br/>
                                    <span className="red-text" style={{color:'red'}}>
                                {errors.heure_rdvTT}  
                            </span>
                                  </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                            	<div className="form-group">
	                              <label htmlFor="type_rdv">objet*</label>
	                              <select className={classnames("form-control",{
	                  	invalid: errors.type_rdv
	                  })}
	                                value={this.state.type_rdv}
	                                onChange={this.onChange}  to="type_rdv" name="type_rdv" disabled={this.onAdd()}>
	                              <option value=""></option>
	                                <option value="checkin">check-in</option>
	                                <option value="checkout">check-out</option>
	                                </select>

	                               <span className="red-text" style={{color:'red'}}>
	                               		{errors.type_rdv}  		
	                            	</span>
                           		 </div>
                            </div>
                                  
                            <div className="mx-auto col-md-2 col-lg-2" style={{marginTop:'25px'}}>
                                <label> </label>
                                  <button  type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-success btn-block" disabled={this.onAdd()}>Ajouter</button>
                            </div>
                           
                          </div>
                      </form>
                  </div>
                   <p className="text-center">
                        {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                           </button>
                         </span>:''}
                    </p>
	        </div>

	         <div className="row mt-5">
              <div className="col-lg-12 col-md-12">
              <h2 style={{backgroundColor: '#ed7e24'}} class="text-white p-2 ">Mes rendez-vous avec Keyservice</h2>
                <table style={{width:'100%'}}>
                  <thead className="table-dark" style={{height:'100px'}}>
                    <tr>
                      <th>N</th>
                      <th>date </th>
                      <th> heure </th>
                      <th> objet </th>
                      <th >Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderRDVs}
                  </tbody>
                </table>
              </div>
            </div>

      </div>
      
    </div>
  );
}
};

function mapStateToProps(state){
    return {
   auth: state.auth,
  errors: state.errors,
  rent: state.rent,
  logements: state.logements, 
  rendezVous: state.rendezVous
    };
};


function loadData(store, idUser){
	return Promise.all([
    store.dispatch( getRentByUser(idUser) ),
    store.dispatch( getrdv(idUser) ),
  ]); 
}

export default {
  loadData,
  component: connect(mapStateToProps,{getRentByUser, addrdv, getrdv, getonerdv, deleterdv, updaterdv})(
    requireAuth(RentInfosPage)
  )
};


