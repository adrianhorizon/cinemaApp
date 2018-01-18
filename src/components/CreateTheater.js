import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateTheater extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      geolocation: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, geolocation } = this.state;

    axios.post('/api/theater', { title, geolocation })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { title, geolocation } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Theater
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Cinema List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="metropolis" />
              </div>
              <div class="form-group">
                <label for="geolocation">Geolocation:</label>
                <input type="text" class="form-control" name="geolocation" value={geolocation} onChange={this.onChange} placeholder="Colombia" />
              </div>
              <button type="submit" class="btn btn-default">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTheater;
