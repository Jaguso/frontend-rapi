import React, {Component} from 'react';
import {loginUser} from '../../services';


class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    console.log(value)
    this.setState({[name]: value})
  }

  onSubmit = async(event) => {
    event.preventDefault();

    let response = await loginUser(this.state).catch(() => alert(response.data.message))
    console.log(response)

    if(response){
      const {token} = response.data
      localStorage.setItem('rappiToken', token)
      this.props.history.push('/')
    }
  }

  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-md-9">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input 
                type="email"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeInput}
              />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input 
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangeInput}
              />
            </div>
            <button type="submit" className="btn btn-success">Send</button>
          </form>
        </div>
      </div>
    )
  }
}


export default Login;