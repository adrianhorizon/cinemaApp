import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Edit from './components/Edit';
import Create from './components/Create';
import Show from './components/Show';
import CreateTheater from './components/CreateTheater';
import EditTheater from './components/EditTheater';
import ShowTheater from './components/ShowTheater';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/editheater/:id' component={EditTheater} />
        <Route path='/createtheater' component={CreateTheater} />
        <Route path='/showtheater/:id' component={ShowTheater} />
      </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
