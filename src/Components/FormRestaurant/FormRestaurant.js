import React, {Component} from 'react';
import Firebase from '../../Firebase';
import FileUploader from 'react-firebase-file-uploader';
import { createRestaurant } from '../../services';

import FormAddress from './FormAddress';


class FormRestaurant extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      cathegory: "1",
      pictures: []
    }
  }

  onChangeInput = (event) => {
    const {name,value} = event.target
    console.log(value)
    this.setState({[name]: value})
  }

  handleUploadSuccess = (filename) => {
    Firebase
      .storage()
      .ref('restaurants')
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState(prevState => ({
          pictures: [
            ...prevState.pictures,
            url
          ]
        }))
      })
  }

  handleUploadError = (error) => {
    console.log(error)
  }

  formSubmit = async(e) => {
    e.preventDefault();

    let data = {
      ...this.state,
      address: {...this.refs.address.getState()}
    }
    
    console.log(data)
    let response = await createRestaurant(data).catch(e => console.log(e))

    if(response) {
      console.log(response)
      this.props.history.push('/')
    }
  }

  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="">Name of restaurant:</label>
              <input 
                type="text"
                name="name"
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description:</label>
              <textarea
                name="description"
                className="form-control"
                cols="30"
                rows="10"
                value={this.state.description}
                onChange={this.onChangeInput}
              ></textarea>

            </div>
            <div className="form-group">
              <label htmlFor="">Type of food:</label>
              <select
                name="cathegory"
                className="form-control"
                value={this.state.cathegory}
                onChange={this.onChangeInput}
              >
                <option value="1">Chinesse food</option>
                <option value="2">Mexican food</option>
                <option value="3">Fast food</option>
                <option value="4">Italian food</option>
                <option value="5">Japanese food</option>
              </select>
            </div>
            <div className="form-group">
              <label className="btn btn-info">
                Add restaurant images
                <FileUploader
                  hidden
                  accept="image/*"
                  randomizeFilename
                  multiple
                  storageRef={Firebase.storage().ref('restaurants')}
                  onUploadError={this.handleUploadError}
                  onUploadSuccess={this.handleUploadSuccess}
                />
              </label>

            </div>
            <h3>Add your restaurant's address</h3>
            <FormAddress ref="address"/>
            <button type="submit" className="btn btn-success">Create Restaurant</button>


          </form>

        </div>

      </div>
    )
  }
}


export default FormRestaurant;