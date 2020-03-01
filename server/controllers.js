var restaurants = require('../restaurants.json');

const controllers = {
  getAll: (req, res) => { // getAll is an object that references each key
    res // response methods that handle data
    .status(200)
    .send(restaurants)
    .end() 
  },
  getOne: (req, res) => {
    let restaurant = restaurants[req.params.id]
    if(restaurant) {
      res
      .status(200)
      .send(restaurant)
      .end()
    } else {
      res.status(404).send(`${req.params.id} was not found`).end()
    }
  }, 
  postOne: (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    if (name !== undefined && rating !== undefined) {
      restaurants.push({
        restaurant_name: name,
        rating: rating
      })
      res
      .status(201)
      .send(`Added ${name} to database with a ${rating} rating`)
      .end()
    } else {
      req
      .status(404)
      .send("Missing a required field: NAME/RATING")
      .end()
    }
  },
  deleteOne: (req, res) => {
    let restaurant = restaurants[req.params.id]
    if (restaurant) {
      restaurants.splice(req.params.id, 1);
      res
      .status(200)
      .send(` Deleted!`)
      .end()
    } else {
      res
      .status(404)
      .send(`No restaurant at request`)
      .end()
    }
  }
};

module.exports = controllers
// ALWAYS REMEMBER TO EXPORT MODULES!!!