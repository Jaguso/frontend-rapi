import React, { Component } from 'react';


class FormAddress extends Component {
  
  constructor(){
    super();
    this.state = {
      street: "",
      number: "",
      city: "",
      zipcode: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
    console.log(value)
  }

  getState = () => this.state

  render() {
    return(
      <div>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="street"
            className="form-control"
            value={this.state.street}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label>Number:</label>
          <input
            type="number"
            name="number"
            className="form-control"
            value={this.state.number}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            className="form-control"
            value={this.state.city}
            onChange={this.onChangeInput}
          />
        </div>
        <div className="form-group">
          <label>Zip code:</label>
          <input
            type="text"
            name="zipcode"
            className="form-control"
            value={this.state.zipcode}
            onChange={this.onChangeInput}
          />
        </div>

      </div>
    )
  }
}


export default FormAddress;