import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: 1
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    this.props.addRestaurant(this.state)
  }


  render() {
    return (
      <div>
        <div className="formTitle">Add a Restaurant</div>
        <div className="fields">
          <div className="field">
            <div>Restaurant name</div>
            <input name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text">
            </input>
          </div>
          <div className="field">
            <div>Rating</div>
            <select
              name="rating"
              value={this.state.rating}
              onChange={this.handleInputChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <button onClick={this.handleSubmit}>Submit</button></div>
        </div>
      </div>
    )
  }
}

export default Form;