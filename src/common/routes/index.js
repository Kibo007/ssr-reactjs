import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../css/App.css';
import WithLayout from '../helpers/LayoutWrapper';

import Home from '../containers/Home';
import Courses from '../containers/Courses';
import Schedule from '../containers/Schedule';
import About from '../containers/About';
import News from '../containers/News';
import Contact from '../containers/Contact';
import Error404 from '../containers/Error404';

const App = () => (
  <WithLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/about" component={About} />{' '}
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={Error404} />
      <Route component={Error404} />
    </Switch>
  </WithLayout>
);

export default App;
