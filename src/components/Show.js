import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {

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

  delete(id){
    console.log(id);
    axios.delete('/api/cinema/'+id)
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">
              {this.state.cinema.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Cinema List</Link></h4>
            <dd>
              <dl>Movie:</dl>
              <dl>{this.state.cinema.movie}</dl>
              <dl>Language:</dl>
              <dl>{this.state.cinema.language}</dl>
              <dl>Publish Date:</dl>
              <dl>{this.state.cinema.published_year}</dl>
              <dl>Publisher:</dl>
              <dl>{this.state.cinema.publisher}</dl>
            </dd>
            <Link to={`/edit/${this.state.cinema._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.cinema._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
