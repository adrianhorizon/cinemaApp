import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      movie: '',
      title: '',
      language: '',
      published_year: '',
      publisher: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { movie, title, language, published_year, publisher } = this.state;

    axios.post('/api/cinema', { movie, title, language, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { movie, title, language, published_year, publisher } = this.state;
    return (
      <div class="container">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Add Movie</h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Cinema List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="movie">Movie:</label>
                <input type="text" class="form-control" name="movie" value={movie} onChange={this.onChange} placeholder="Action" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="COCO" />
              </div>
              <div class="form-group">
                <label for="language">Language:</label>
                <input type="text" class="form-control" name="language" value={language} onChange={this.onChange} placeholder="Spanish" />
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" class="btn btn-default">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
