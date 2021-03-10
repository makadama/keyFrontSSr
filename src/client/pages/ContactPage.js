import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendAnMessage } from "../actions/contactActions";
import classnames from "classnames";
import './styleContactPage.css';
import { Helmet } from 'react-helmet';


class ContactPage extends Component {
  constructor(){
    super()
    this.state={
      bureau: "",
      mailSubject: "",
      firstname: "",
      email: "",
      telephone: "",
      mailContent: "",
      errors:{}
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit= this.onSubmit.bind(this)
    }

    head(){
      return(
      <Helmet>
        <title>Contacts - Keyservice Conciergerie</title>
      </Helmet>)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
        
      if (nextProps.mail.isSent) {
            this.setState({
            mail: nextProps.mail,
            errors: {}
          });
        }       
        
  }

    onChange (e){
    this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
    e.preventDefault();
    const mailToSend={
      bureau: this.state.bureau,
      mailSubject: this.state.mailSubject,
      firstname: this.state.firstname,
      email: this.state.email,
      telephone: this.state.telephone,
      mailContent: this.state.mailContent

    }

    this.props.sendAnMessage(mailToSend);
    }
  
  render() {
      const { mail } = this.state;
      const { errors } = this.state;
    return (
      <div data-test="contactComponent">
        {this.head()}
      <div className="contactGrid">
        <div className="container forms mt-5 mb-5 ">
          <div className='row'>
            <p className="text-center col-lg-12 col-md-12 col-xs-12">
                          {mail ? <span className="alert alert-success alert-dismissible fade show" style={{width:'auto'}}>message envoyé!
                          keyservice vous répondra dès que possible.
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
              </p>

            <p className="text-center col-lg-12 col-md-12 col-xs-12">
                          {errors.message ? <span className="alert alert-danger alert-dismissible fade show" style={{width:'auto'}}>{errors.message}
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                             </button>
                           </span>:''}
               </p>
          </div>

    <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
            <div className="card">
                <div className="card-header text-white" style={{backgroundColor:'#00cccb'}}><i className="fa fa-envelope"></i> Nous contacter!
                </div>
                <div className="card-body">
                    <form noValidate onSubmit={this.onSubmit}>
                      <div className="form-group">
                            <label htmlFor="bureau">Quel bureau souhaitez contacter?</label>
                            <select className={classnames("form-control",{
                          invalid: errors.bureau
                          })}
                          value={this.state.bureau}
                          onChange={this.onChange}  to="bureau" name="bureau">
                            <option value=""></option>
                              <option value="Paris et îles de France">Paris et îles de  France</option>
                              <option value="Lyon">Lyon</option>
                              <option value="Bordeau">Bordeau</option>
                              <option value="Marseille">Marseille</option>
                            </select>
                             <span className="red-text" style={{color:'red'}}>
                              {errors.bureau}  
                          </span>
                            </div>
                        <div className="form-group">
                            <label htmlFor="mailSubject">Objet</label>
                            <select className={classnames("form-control",{
                            invalid: errors.mailSubject
                            })}
                            value={this.state.mailSubject}
                            onChange={this.onChange} id="mailSubject" name="mailSubject">
                              <option value=""></option>
                              <option value="renseignement">Je suis intéressé par les service de Keyservices</option>
                              <option value="voyageur">Je séjourne dans un logement de Keyservices</option>
                              <option value="hôte">Je suis un client de  Keyservices</option>
                              <option value="autre">Autre</option>
                            </select>
                            <span className="red-text" style={{color:'red'}}>
                              {errors.mailSubject}  
                          </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Nom</label>
                            <input type="text" name="firstname" className={classnames("form-control",{
                            invalid: errors.firstname
                            })}
                            value={this.state.firstname}
                            onChange={this.onChange} id="firstname" aria-describedby="emailHelp" placeholder="votre nom" required/>
                          <span className="red-text" style={{color:'red'}}>
                              {errors.firstname}  
                          </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input type="email" name="email" className={classnames("form-control",{
                            invalid: errors.email
                            })}
                            value={this.state.email}
                            onChange={this.onChange} id="email" aria-describedby="emailHelp" placeholder="votre email" required/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                          <span className="red-text" style={{color:'red'}}>
                              {errors.email}  
                          </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" name="telephone" className={classnames("form-control",{
                            invalid: errors.telephone
                            })}
                            value={this.state.telephone}
                            onChange={this.onChange} id="telephone" aria-describedby="emailHelp" placeholder="votre numéro de téléphone" required/>
                          <span className="red-text" style={{color:'red'}}>
                              {errors.telephone}  
                          </span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mailContent">Message</label>
                            <textarea className={classnames("form-control",{
                            invalid: errors.mailContent
                            })}
                            value={this.state.mailContent}
                            onChange={this.onChange} name="mailContent" id="mailContent" rows="6" required></textarea>
                          <span className="red-text" style={{color:'red'}}>
                              {errors.mailContent}  
                          </span>
                        </div>
                        <div className="mx-auto">
                        <button type="submit" className="btn btn-primary boutonContact text-right">Envoyer</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-1">
            <div className="card bg-light mb-auto card2 ">
                <div className="card-header  text-white text-uppercase" style={{backgroundColor:'#ed7e24'}}><i className="fa fa-home"></i>Nos coordonnées </div>
                <div className="card-body">
                    <ul className="coordonnees">
                      <li className="townItem">
                          Paris
                          <ul className="townsData">
                              <li><i className="fa fa-home"></i>18 avenue de Villiers 75017 Paris </li>
                              <li><i className="fas fa-envelope"></i> keyservicesdeparis@keyservices.com </li>
                              <li><i className="fas fa-phone-alt"></i> 2004039878 </li>
                          </ul>
                      </li>
                      <li className="townItem">
                          Lyon
                          <ul className="townsData">
                              <li><i className="fa fa-home"></i>18 Rue de la République 69002 Lyon </li>
                              <li><i className="fas fa-envelope"></i> keyservicesdelyon@keyservices.com </li>
                              <li><i className="fas fa-phone-alt"></i> 789520244522 </li>
                          </ul>
                      </li>
                      <li className="townItem">
                          Bordeaux
                          <ul className="townsData">
                              <li><i className="fa fa-home"></i> 1 rue du 11 Novembre 1918 Bordeaux </li>
                              <li><i className="fas fa-envelope"></i> keyservicesdebordeaux@keyservices.com </li>
                              <li><i className="fas fa-phone-alt"></i> 952526332478 </li>
                          </ul>
                      </li>
                      <li className="townItem">
                          Marseille
                          <ul className="townsData">
                              <li><i className="fa fa-home"></i> 3 rue du Panier 13013 Marseille </li>
                              <li><i className="fas fa-envelope"></i> keyservicesdemarseille@keyservices.com </li>
                              <li><i className="fas fa-phone-alt"></i> 7894561239</li>
                          </ul>
                      </li>
                    </ul>

                </div>

            </div>
        </div>
    </div>
</div>
</div>
</div>

    );
  }
}


const mapStateToProps = state => ({
  mail: state.mail,
  errors: state.errors
});



export default {
  component:  connect(
  mapStateToProps,
  { sendAnMessage }
)(ContactPage)
};

