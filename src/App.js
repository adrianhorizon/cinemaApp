import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cinemas: [],
      theaters: []
    };
  }

  componentDidMount() {
    axios.get('/api/cinema')
      .then(res => {
        this.setState({ cinemas: res.data });
        console.log(this.state.cinemas);
    });
    axios.get('/api/theater')
      .then(res => {
        this.setState({ theaters: res.data });
        console.log(this.state.theaters);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">
              CINEMA CATALOG
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Cinema</Link></h4>
            <h4><Link to="/createtheater"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Theater</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Movie</th>
                  <th>Title</th>
                  <th>Language</th>
                </tr>
              </thead>
              <tbody>
                {this.state.cinemas.map(cinema =>
                  <tr>
                    <td><Link to={`/show/${cinema._id}`}>{cinema.movie}</Link></td>
                    <td>{cinema.title}</td>
                    <td>{cinema.language}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
