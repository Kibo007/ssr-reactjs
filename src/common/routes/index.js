import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// import '../css/App.css';
import 'antd/dist/antd.css';

// const history = createBrowserHistory();

// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import WithLayout from '../helpers/LayoutWrapper';

import Home from '../containers/App';
// const Home = Loadable({
//   loader: () => import('../containers/App'),
//   loading: () => null
// });

// const WithLayout = ({ component }) => <WithLayout>{component}</WithLayout>;

import About from '../containers/About';
import Router from 'react-router-dom/Router';
// const About = Loadable({
//   loader: () => import('../containers/About'),
//   loading: () => null
// });

// component={<WithLayout WrappedComponent={Home} />}

// const Routes = () => {
//   return (
//     <Router history={createBrowserHistory()}>
//       <Route exact path="/" component={Home} />
//       {/* <Route path="courses" component={Courses} />
//       <Route path="schedule" component={Schedule} /> */}
//       <Route path="about" component={About} />
//       {/* <Route path="about" component={<WithLayout WrappedComponent={About} />} /> */}
//       {/* <Route path="news" component={News} />
//       <Route path="contact" component={Contact} /> */}
//     </Router>
//   );
// };

// export default Routes;

// import React from 'react';
// import Route from 'react-router-dom/Route';
// import Switch from 'react-router-dom/Switch';
// import Home from './Home';
// import './App.css';

const App = () => (
  <WithLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/404" component={() => <div>404 Not Found yow men</div>} />
      <Route component={() => <div>404 Not Found yow men</div>} />
    </Switch>
  </WithLayout>
);

export default App;
