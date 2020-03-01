import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
const RestaurantList = ({ restaurants, deleteRestaurant }) => (
  <div className="list">
    {restaurants.map((restaurant, i) => (
      <RestaurantListEntry 
        restaurant={restaurant}
        key={i}
        index={i}
        deleteRestaurant={deleteRestaurant}
      />
    ))}
  </div>
)

export default RestaurantList;