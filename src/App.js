import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Route path="/users" component={Users}/>
          <Route path="/courses" component={Courses}/>
          <Redirect from='/' to='/courses' />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
