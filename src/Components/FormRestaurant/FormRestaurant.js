import React, {Component} from 'react';


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

  render(){
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form onSubmit={this.formSubmit}>
            <div className="form-group">

            </div>

          </form>

        </div>

      </div>
    )
  }
}