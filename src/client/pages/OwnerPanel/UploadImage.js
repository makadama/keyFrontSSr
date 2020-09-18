import React , {Component} from 'react';
import { connect } from 'react-redux';
import { uploadLogementImage } from "../../actions/logementsActions";
import './styleUpload.css';

//import './styleCart.css';

class UploadImage extends Component{
  constructor(){
    super()
    this.state={
      file: null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
componentDidMount(){
  
}

onChange(e) {
        this.setState({file:e.target.files[0]});
    }

 onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('fk_logement', this.props.match.params.id);
        formData.append('file',this.state.file);
       this.props.uploadLogementImage(formData).then(()=>{
        alert("The file is successfully uploaded");
       })
       
    }


 render(){

 			
 	return(
 			<div>
          <div className="container uploading">
            <div className="row">
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="file" onChange= {this.onChange} className="inputfile" />
                <button type="submit">Upload</button>
            </form>
            </div>
          </div>
      </div>
 			)
}
}const mapStateToProps = state =>({
	auth: state.auth
})

export default{
  component: connect(mapStateToProps, {uploadLogementImage}) (UploadImage)
} 