import React, {Component} from 'react';
import CardRestaurant from '../Cards/CardRestaurant';
import { getRestaurants } from '../../services';


class Home extends Component {
  
  constructor(){
    super();
    this.state = {
      restaurants: [],
      isLoading: true
    }
  }

  componentDidMount(){
    getRestaurants().then((response) => {
      this.setState({
        restaurants: response.data,
        isLoading: false
      })
    }).catch((e) => {
      console.log(e)
    })
  }

  renderRestaurants = () => {
    return this.state.restaurants.map(
      (restaurant) => (
        <CardRestaurant
          id={restaurant.id}
          name={restaurant.name}
          image={restaurant.pictures ? restaurant.pictures[0] : null}
        />
      )
    )
  }

  render(){
    return(
      <div>
        <h2 className="mb-4">All restaurants</h2>
        <div className="row">
          {
            (this.state.isLoading) ? (<h4>Loading...</h4>) : this.renderRestaurants()
          }
        </div>

      </div>
    )
  }
}

export default Home;