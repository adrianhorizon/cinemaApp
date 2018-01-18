import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditTheater extends Component {

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

  onChange = (e) => {
    const state = this.state.theater
    state[e.target.name] = e.target.value;
    this.setState({theater:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, geolocation } = this.state.theater;

    axios.put('/api/theater/'+this.props.match.params.id, { title, geolocation })
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
              Edit Theater
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.theater._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> Cinema List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.theater.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="geolocation">Geolocation:</label>
                <input type="text" class="form-control" name="geolocation" value={this.state.theater.geolocation} onChange={this.onChange} placeholder="Geolocation" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditTheater;
