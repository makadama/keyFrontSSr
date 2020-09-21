import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from "classnames";
import { Helmet } from 'react-helmet';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import { sendLogementInfo } from "../../actions/simulationActions";

/*ceci est la page d'accueil du site web, les différentes parties de cette page sont découpé en composants
 */
class SimulationPage extends Component  {
    constructor(){
      super()
      this.state={
          firstname: "",
          email: "",
          telephone: "", 
          ville: "",
          adresse: "",
          codePostal: "",
          type: "",
          surface: "",
          capacite: "",
          nbChambre: "",
          nbLit: "",
          nbSDB : "",
          etage: "",
          dateDispo: new Date(), 
          duree: "",
          occupation: "", 
          equipement: "",
          description:  "",     
          tarif: "",
          errors:{}
           }

            this.onChange=this.onChange.bind(this)
            this.onSubmit= this.onSubmit.bind(this)
            this.handleChange = this.handleChange.bind(this)
         }
     head(){
        return(
            <Helmet>
                <title> Simulation - Keyservice Conciergerie </title>
            </Helmet>
            );
    }
    
    onChange (e){
    this.setState({[e.target.name]:e.target.value})
  }

    handleChange(date) {
    this.setState({
      dateDispo: date
    });
  };


  onSubmit(e){
    e.preventDefault();
   const logementInfo={
        firstname: this.state.firstname,
          email: this.state.email,
          telephone: this.state.telephone, 
          ville: this.state.ville,
          adresse: this.state.adresse,
          codePostal: this.state.codePostal,
          type: this.state.type,
          surface: this.state.surface,
          capacite: this.state.capacite,
          nbChambre: this.state.nbChambre,
          nbLit: this.state.nbLit,
          nbSDB : this.state.nbSDB,
          etage: this.state.etage,
          dateDispo: this.state.dateDispo, 
          duree: this.state.duree,
          occupation: this.state.occupation, 
          equipement: this.state.equipement,
          description:  this.state.description,     
          tarif: this.state.tarif
   }

   this.props.sendLogementInfo(logementInfo);
    
  }

 

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
     if (nextProps.simulation.isSent) {
            this.setState({
            simulation: nextProps.simulation,
            errors: {}
          });
        }       
  }
    render(){
      const { errors } = this.state;
      const {simulation} = this.state;
	return(
        <div style={{marginTop:'100px', marginBottom:'5px', height:'auto'}}>
          {this.head()}
          
              <div className="container">
                <p className="text-center col-lg-12 col-md-12 col-xs-12">
                          {simulation ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}>message envoyé!
                          keyservice vous répondra dès que possible.
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
              </p>
                <div className="row">
                      <div className="col-md-8 mt-5 mx-auto">
                      
                        <form noValidate onSubmit={this.onSubmit}>
                          <h1 className="h3 mb-3 font-weight-normal">Simulation</h1>
                           <div className="seperator2"></div>
                           <p> accordez nous une minute! Nous vous apporterons la solution par mail.</p>
                          <fieldset className="scheduler-border">
                            <legend className="the-legend"> Vos informations</legend>
                            <div className="row d-flex justify-content-between">
                                <div className="col-4">
                                     <div className="form-group">
                                      <label htmlFor="firstname">Prénom*</label>
                                      <input
                                        id="firstname"
                                        type="text"
                                        className={classnames("form-control",{
                                          invalid: errors.firstname 
                                        })}
                                        name="firstname"
                                        placeholder="Entrer votre prénom"
                                        value={this.state.firstname}
                                        onChange={this.onChange}/>
                                      <span className="red-text">
                                          {errors.firstname}
                                      </span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                      <label htmlFor="email">Email*</label>
                                      <input
                                        id="email"
                                        type="text"
                                        className={classnames("form-control",{
                                          invalid: errors.email || errors.emailnotfound
                                        })}
                                        name="email"
                                        placeholder="Entrez votre email"
                                        value={this.state.email}
                                         
                                        onChange={this.onChange}

                                      />
                                      
                                      <span className="red-text">
                                          {errors.email}
                                          {errors.emailnotfound}
                                      </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between">
                                <div className="col-12">
                                        <div className="form-group">
                                    <label htmlFor="telephone">Téléphone*</label>
                                    <input
                                      id="telephone"
                                      type="text"
                                      className={classnames("form-control",{
                                        invalid: errors.telephone 
                                      })}
                                      name="telephone"
                                      placeholder="Entrer votre numéro de téléphone"
                                      value={this.state.telephone}
                                       
                                      onChange={this.onChange}

                                    />
                                    <span className="red-text">
                                        {errors.telephone}
              
                                    </span>
                              </div>
                                </div>
                            </div>
                          </fieldset>
                            
                          <fieldset class="scheduler-border">
                              <legend class="the-legend">les informations de mon bien</legend>
                                <div className="form-group">
                                    <label htmlFor="ville">Dans quelle ville se trouve votre bien?*</label>
                                    <select className={classnames("form-control",{
                                      invalid: errors.ville
                                      })}
                                      value={this.state.ville}
                                      onChange={this.onChange}  to="ville" name="ville">
                                    <option value=""></option>
                                      <option value="Paris et îles de  France">Paris et îles de  France</option>
                                      <option value="Lyon">Lyon</option>
                                      <option value="Bordeau">Bordeau</option>
                                      <option value="Marseille">Marseille</option>
                                    </select>
                                     <span className="red-text" style={{color:'red'}}>
                                      {errors.ville}  
                                  </span>
                                </div>

                                 <div className="form-group">
                                    <label htmlFor="adresse">Adresse</label>
                                    <input
                                      id="adresse"
                                      type="text"
                                      className={classnames("form-control",{
                                        invalid: errors.adresse 
                                      })}
                                      name="adresse"
                                      placeholder="Entrer l'adresse du bien à louer"
                                      value={this.state.adresse}
                                       
                                      onChange={this.onChange}

                                    />
                                    
                                    <span className="red-text">
                                        {errors.adresse}
              
                                    </span>
                                </div>

                                <div className="form-group">
                                  <label htmlFor="codePostal">Code Postal</label>
                                  <input
                                    id="codePostal"
                                    type="text"
                                    className={classnames("form-control",{
                                      invalid: errors.codePostal 
                                    })}
                                    name="codePostal"
                                    placeholder="Entrer le code postal"
                                    value={this.state.codePostal}
                                    onChange={this.onChange}
                                  />
                                  <span className="red-text">
                                      {errors.codePostal}
            
                                  </span>
                              </div>

                          </fieldset>

                          <fieldset class="scheduler-border">
                              <legend class="the-legend">Details</legend>
                              <div className="row d-flex justify-content-between">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label htmlFor="type">Type*</label>
                                        <select className={classnames("form-control",{
                                          invalid: errors.type
                                          })}
                                          value={this.state.type}
                                          onChange={this.onChange}  to="type" name="type">
                                          <option value=""></option>
                                          <option value="appartement">Appartement</option>
                                          <option value="maison">Maison</option>
                                         
                                        </select>
                                         <span className="red-text" style={{color:'red'}}>
                                          {errors.type}  
                                      </span>
                                    </div>
                                </div>
                                 <div className="col-4">
                                       <div className="form-group">
                                          <label htmlFor="etage">numéro étage*</label>
                                          <select className={classnames("form-control",{
                                            invalid: errors.etage
                                            })}
                                            value={this.state.etage}
                                            onChange={this.onChange}  to="etage" name="etage">
                                          <option value=""></option>
                                            <option value="rez de chaussée">rez de chaussée</option>
                                            <option value="Du premier au troisième">Du premier au troisième</option>
                                            <option value="Du quatrième et plus">Du quatrième et plus</option>
              
                                          </select>
                                           <span className="red-text" style={{color:'red'}}>
                                            {errors.etage}  
                                        </span>
                                      </div>
                                  </div>

                              </div>
                              
                          </fieldset>
                          
                          <fieldset class="scheduler-border">
                              <legend class="the-legend">Caractéristiques</legend>
                              <div className="row d-flex justify-content-between">
                                <div className="col-4">
                                  <div className="form-group">
                                    <label htmlFor="surface">Surface*</label>
                                    <input
                                      id="surface"
                                      type="text"
                                      className={classnames("form-control",{
                                        invalid: errors.surface 
                                      })}
                                      name="surface"
                                      placeholder="Entrer la surface"
                                      value={this.state.surface}
                                       
                                      onChange={this.onChange}

                                    />
                                    
                                    <span className="red-text">
                                        {errors.surface}
              
                                    </span>
                                </div>
                              </div>
                              <div className="col-4">
                                  <div className="form-group">
                                          <label htmlFor="capacite">Capacité d'accueil*</label>
                                          <select className={classnames("form-control",{
                                            invalid: errors.capacite
                                            })}
                                            value={this.state.capacite}
                                            onChange={this.onChange}  to="capacite" name="capacite">
                                          <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10 et plus">10 et plus</option>
              
                                          </select>
                                           <span className="red-text" style={{color:'red'}}>
                                            {errors.capacite}  
                                        </span>
                                  </div>
                              </div>

                            </div>
                            <div className="row d-flex justify-content-between">
                              <div className="col-4">
                                <div className="form-group">
                                          <label htmlFor="nbChambre">Nombre de chambres*</label>
                                          <select className={classnames("form-control",{
                                            invalid: errors.nbChambre
                                            })}
                                            value={this.state.nbChambre}
                                            onChange={this.onChange}  to="nbChambre" name="nbChambre">
                                            <option value=""></option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5 et plus">5 et plus</option>
                                          </select>
                                           <span className="red-text" style={{color:'red'}}>
                                            {errors.nbChambre}  
                                        </span>
                                  </div>
                                </div>
                                <div className="col-4">
                                  <div className="form-group">
                                            <label htmlFor="nbLit">Nombre de lits*</label>
                                            <select className={classnames("form-control",{
                                              invalid: errors.nbLit
                                              })}
                                              value={this.state.nbLit}
                                              onChange={this.onChange}  to="nbLit" name="nbLit">
                                              <option value=""></option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5 et plus">5 et plus</option>
                                            </select>
                                             <span className="red-text" style={{color:'red'}}>
                                              {errors.nbLit}  
                                          </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-between">
                              <div className="col-4">
                                   <div className="form-group">
                                            <label htmlFor="nbSDB">Nombre de salles de bain*</label>
                                            <select className={classnames("form-control",{
                                              invalid: errors.nbSDB
                                              })}
                                              value={this.state.nbSDB}
                                              onChange={this.onChange}  to="nbSDB" name="nbSDB">
                                              <option value=""></option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3 et plus">3 et plus</option>
                                            </select>
                                             <span className="red-text" style={{color:'red'}}>
                                              {errors.nbSDB}  
                                          </span>
                                    </div>
                              </div>
                              <div className="col-4">
                                   
                              </div>

                            </div>
                            <div className="form-group">
                                    <label htmlFor="equipement"> Autre Avantages </label>
                                    <input
                                    id="equipement"
                                    type="text"
                                    className={classnames("form-control",{
                                      invalid: errors.equipement 
                                    })}
                                    name="equipement"
                                    placeholder="wifi, electro-ménagers, balcon, piscine, parking, ascenceur,TV,..."
                                    value={this.state.equipement}
                                    onChange={this.onChange}
                                  />
                                    
                              </div>

                          </fieldset>
                          
                          <fieldset class="scheduler-border">
                              <legend class="the-legend">Location</legend>
                              <div className="form-group">
                                    <label> A partir de quand votre logement sera disponible?* </label>
                                    <DatePicker
                                      className="form-control"
                                      selected={ this.state.dateDispo }
                                      onChange={ date=>this.handleChange(date) }
                                      name="dateDispo"
                                      dateFormat="dd-MM-yyyy"
                                      value={this.state.dateDispo}
                                      minDate={new Date()}
                                     maxDate={addMonths(new Date(), 6)}
                                      border-color="Red"
                                    />
                              </div>
                              <div className="form-group">
                                            <label htmlFor="duree">Quelle est la durée de mise en location?*</label>
                                            <select className={classnames("form-control",{
                                              invalid: errors.duree
                                              })}
                                              value={this.state.duree}
                                              onChange={this.onChange}  to="duree" name="duree">
                                              <option value="moins d'un mois"> moins d'un mois </option>
                                              <option value="moins de 3 mois"> moins de 3 mois</option>
                                              <option value="toute l'été"> toute l'été</option>
                                              <option value="moins de 6 mois">moins de 6 mois</option>
                                              <option value="moins de 9 mois"> moins de 9 mois</option>
                                             
                                            </select>
                                             <span className="red-text" style={{color:'red'}}>
                                              {errors.duree}  
                                          </span>
                              </div>
                              <div className="form-group">
                                            <label htmlFor="occupation">souhaitez vous occuper votre logement?*</label>
                                            <select className={classnames("form-control",{
                                              invalid: errors.occupation
                                              })}
                                              value={this.state.occupation}
                                              onChange={this.onChange}  to="occupation" name="occupation">
                                              <option value=""></option>
                                              <option value="Non location à temps plein">Non location à temps plein</option>
                                              <option value="une dizaine de jour par an">une dizaine de jour par an</option>
                                              <option value="2 ou 3 jours par an">2 ou 3 jours par an</option>
                                              <option value="une semaine par mois">une semaine par mois</option>
                                              <option value="plus d'une semaine par mois">plus d'une semaine par mois</option>
                                              <option value="les jours ouvrable">les jours ouvrable</option>
                                              <option value="les week-end">les week-end</option>
                                            </select>
                                             <span className="red-text" style={{color:'red'}}>
                                              {errors.occupation}  
                                          </span>
                              </div>

                          </fieldset>
                          <fieldset class="scheduler-border">
                              <legend class="the-legend">Tarif</legend>
                              <div className="form-group">
                                <label htmlFor="tarif">Quel type de conciergerie souhaiter vous?*</label>
                                <select className="form-control" value={this.state.tarif}
                                  onChange={this.onChange}  to="tarif" name="tarif">
                                 <option value="1">Pack check-in check-out</option>
                                  <option value="2">Pack All inclusive</option>
                                  
                                </select>
                                 
                            </div>
                          </fieldset>
                 
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-block"
                          >
                            Envoyer
                          </button>

                           
                          
                      </form>
                        </div>
                       </div>
             </div>
        </div>

		)
}
}
const mapStateToProps = state =>({
  errors: state.errors,
  simulation:  state.simulation
})

export default {
  component: connect(mapStateToProps, {sendLogementInfo}) (SimulationPage)
};
 
