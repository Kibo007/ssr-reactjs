// import React from 'react';
// import { SwitchRoutes, DefaultRoute } from './helpers';

// import PrivateRoutes from './list/private.routes';
// import OpenRoutes from './list/open.routes';
// import ErrorRoutes from './list/error.routes';

// function AdminRoutesProd() {
//   return (
//     <SwitchRoutes>
//       <DefaultRoute />
//       <PrivateRoutes />
//       <OpenRoutes />
//       <ErrorRoutes />
//     </SwitchRoutes>
//   );
// }

// export default AdminRoutesProd;

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from '../containers/App';
import About from '../containers/About';

const Routes = props => {
  return (
    <Router history={browserHistory} {...props}>
      <Route path="/" component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
    </Router>
  );
};

export default Routes;
