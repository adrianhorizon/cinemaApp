import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ShowTheater extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theater: {}
    };
  }

  componentDidMount() {
    axios.get('/api/theater/'+this.props.match.params.id)
      .then(res => {
        this.setState({ theater: res.data });
        console.log(this.state.theater);
      });
  }

  delete(id){
    console.log(id);
    axios.delete('/api/theater/'+id)
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
              {this.state.theater.title}
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Theater List</Link></h4>
            <dd>
              <dl>Movie:</dl>
              <dl>{this.state.theater.title}</dl>
              <dl>Language:</dl>
              <dl>{this.state.theater.geolocation}</dl>
            </dd>
            <Link to={`/edit/${this.state.theater._id}`} class="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.theater._id)} class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTheater;
