import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/users" component={Users}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/course/:id/:title" component={Course}/>
            <Redirect from='/' to='/courses' />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
