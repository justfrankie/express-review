import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [
        {
          "id": 1,
          "restaurant_name": "Howlin Rays",
          "rating": 5
        },
        {
          "id": 2,
          "restaurant_name": "Mariscos Jalisco",
          "rating": 5
        },
        {
          "id": 3,
          "restaurant_name": "Hummus Factory",
          "rating": 4
        },
        {
          "id": 4,
          "restaurant_name": "Joy",
          "rating": 4
        },
        {
          "id": 5,
          "restaurant_name": "Rustic Canyon",
          "rating": 5
        }
      ]
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }


  getRestaurants() {
    axios.get("/restaurants").then(response => {
      console.log(response.data)
      this.setState({
        restaurants: response.data
      })
    })
  }

  deleteRestaurant(index) { // send a delete request to the server
    axios.delete(`/restaurants/${index}`)
    .then( () => this.getRestaurants())
    .catch(err => console.error(err)) 
  }

  /* object destructuring is equivalent of declaring this
  {
    name: name,
    rating: rating
  }
  */

  addRestaurant({name, rating}) {
    axios
      .post("/restaurants", {
      name, rating
     })
    .then(() => {this.getRestaurants()})
    .catch((err) => {console.log(err)})
  } // FIX SYNTAX

  componentDidMount() {
    this.getRestaurants();
  }


  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ?
          < RestaurantList
          restaurants={this.state.restaurants}
          deleteRestaurant={this.deleteRestaurant} 
          />
          :
          <div className="error">Fix your get request!</div>}
        <AddRestaurantForm addRestaurant={this.addRestaurant}/>
      </div>
    )
  }
}

export default App;