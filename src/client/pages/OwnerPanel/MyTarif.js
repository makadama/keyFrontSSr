import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getLogementById, updateLogement} from "../../actions/logementsActions";
import './MyTarifStyle.css';

class MyTarif extends Component {
  constructor(){
    super()
    this.state={
      fk_ville: "",
      adresse: "",
      code_postal: "",
      complement: "",
      type: "",
      nb_lits: "",
      nb_sdb: "",
      description:"",
      superficie: "",
      fk_hote:"",
      tarif:"",
      success: false,
      errors:{}
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    }

  componentDidMount(){

      console.log(this.props.match.params.id)
        this.props.getLogementById(this.props.match.params.id)
      
    }

    componentWillReceiveProps(nextProps){

    this.setState({
      fk_ville: nextProps.logements.logement.fk_ville,
      adresse: nextProps.logements.logement.adresse,
      code_postal: nextProps.logements.logement.code_postal,
      complement: nextProps.logements.logement.complement,
      type: nextProps.logements.logement.type,
      nb_lits: nextProps.logements.logement.nb_lits,
      nb_sdb: nextProps.logements.logement.nb_sdb,
      description: nextProps.logements.logement.description,
      superficie: nextProps.logements.logement.superficie,
      tarif: nextProps.logements.logement.fk_tarif,
      errors: nextProps.errors,
      success: nextProps.success
    });
    

  }


        
    

    onChange (e){
    this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
    e.preventDefault();
    const logementInfo={
      fk_ville: this.state.fk_ville,
      adresse: this.state.adresse,
      code_postal: this.state.code_postal,
      complement: this.state.complement,
      type: this.state.type,
      nb_lits: this.state.nb_lits,
      nb_sdb: this.state.nb_sdb,
      description: this.state.description,
      superficie: this.state.superficie,
      fk_hote: this.props.auth.id,
      tarif: this.state.tarif
}
this.props.updateLogement(this.props.logements.logement.id, logementInfo, this.props.history);

    
    }
  

  render() {
    const { logement } = this.props.logements;
      const { id } = this.props.auth;
      const {success } = this.state;
     

    return (
        
       <div class="container mb-5 mt-5">

    <div class="pricing card-deck flex-column flex-md-row mb-3">
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom  text-white shadow-sm" style={{backgroundColor:'#00cccb'}}>Pack check-in check-out</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">10<span class="price">%</span><span class="h6 text-muted ml-2">des commissions</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Annonce</li>
                    <li>Accueil des Voyageurs</li>
                    <li>Départ des Voyageurs</li>
                    <li>Communication avec les voyageurs</li>
                </ul>
                <button type="button" class="btn btn-primary mb-3">Simuler</button>
            </div>
        </div>
        <div class="card card-pricing popular shadow text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom  text-white shadow-sm"  style={{backgroundColor:'#ed7e24'}}>Pack All inclusive</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">25<span class="price">%</span><span class="h6 text-muted ml-2">des commissions</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Annonce</li>
                    <li>Optimisation des prix</li>
                    <li>Accueil des Voyageurs</li>
                    <li>Départ des Voyageurs</li>
                    <li>Communication avec les voyageurs</li>
                    <li>Ménage</li>
                    <li>Etat des lieux</li>
                </ul>
                <button type="button" class="btn btn-primary mb-3">Simuler</button>
            </div>
        </div>
        
    </div>
            <p className="text-center col-lg-12 col-md-12 col-xs-12">
                    {success ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}> votre logement a été mise à jour!
                             <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
            </p>
            <form noValidate onSubmit={this.onSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal">Tarif</h1>
                          <div className="form-group">
                              <label htmlFor="tarif">Choisir un pack pour votre logement?*</label>
                              <select className="form-control" value={this.state.tarif}
                                onChange={this.onChange}  to="tarif" name="tarif">
                               <option value="1">Pack check-in check-out</option>
                                <option value="2">Pack All inclusive</option>
                                
                              </select>
                               
                            </div>
                            

  <button type="submit" class="btn btn-primary">Ajouter</button>

                   
                  </form>

</div>

     
    );
  }
}

function mapStateToProps(state){
  return { logements: state.logements, auth: state.auth, success: state.success};
}
function loadData(store, id){

  return store.dispatch(getLogementById(id));
}

export default{
  loadData,
  component: connect (mapStateToProps, {getLogementById, updateLogement})(withRouter(MyTarif))
   
} 