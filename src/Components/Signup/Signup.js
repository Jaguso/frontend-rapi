import React, {Component} from 'react';
import { createUser } from '../../services';


class Signup extends Component{

  constructor(){
    super();
    this.state = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      checkPassword: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  validPasswords = () => {
    const {password, checkPassword} = this.state
    return password === checkPassword;
  }

  onSubmit = async (event) => {
    event.preventDefault();
    if(this.validPasswords()){
      let response = {}
      response = await createUser(this.state).catch(({response}) => alert(response.data.error.errors[0].message))
      console.log(response)
      this.props.history.push('/')
    }else{
      alert("Los passwords no coinciden")
    }
  }

  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.onSubmit}>
            <div className="justify-content-center">
              <div className="col-md-6 form-group">
                <label htmlFor="name">Your name:</label>
                <input 
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="lastname">Your lastname:</label>
                <input 
                  type="text"
                  name="lastname"
                  className="form-control"
                  value={this.state.lastname}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Your email:</label>
                <input 
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Your password:</label>
                <input 
                  type="password"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="">Confirm password:</label>
                <input 
                  type="password"
                  name="checkPassword"
                  className="form-control"
                  value={this.state.checkPassword}
                  onChange={this.onChangeInput}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-success" >Register</button>
          </form>

        </div>

      </div>
    )
  }
}


export default Signup;