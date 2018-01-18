import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cinema: {}
    };
  }

  componentDidMount() {
    axios.get('/api/cinema/'+this.props.match.params.id)
      .then(res => {
        this.setState({ cinema: res.data });
        console.log(this.state.cinema);
      });
  }

  onChange = (e) => {
    const state = this.state.cinema
    state[e.target.name] = e.target.value;
    this.setState({cinema:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { movie, title, language, published_year, publisher } = this.state.cinema;

    axios.put('/api/cinema/'+this.props.match.params.id, { movie, title, language, published_year, publisher })
      .then((result) => {
        this.props.history.push("/show/"+this.props.match.params.id)
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">
              Edit Movie
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.cinema._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Cinema List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="movie">Movie:</label>
                <input type="text" class="form-control" name="movie" value={this.state.cinema.movie} onChange={this.onChange} placeholder="Movie" />
              </div>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.cinema.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="language">Language:</label>
                <input type="text" class="form-control" name="language" value={this.state.cinema.language} onChange={this.onChange} placeholder="Language" />
              </div>
              <div class="form-group">
                <label for="published_date">Published Date:</label>
                <input type="number" class="form-control" name="published_year" value={this.state.cinema.published_year} onChange={this.onChange} placeholder="Published Year" />
              </div>
              <div class="form-group">
                <label for="publisher">Publisher:</label>
                <input type="text" class="form-control" name="publisher" value={this.state.cinema.publisher} onChange={this.onChange} placeholder="Publisher" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;
