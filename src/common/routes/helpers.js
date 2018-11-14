import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getUserRole } from '../LocalStorage';
// import { userRole } from '../../utils/Constants';

import ContentMain from '../../components/AdminLayout/Content';

const USER_ROLE = getUserRole();

const switchRoutesPropTypes = {
  children: PropTypes.array.isRequired
};

export function SwitchRoutes({ children }) {
  return (
    <Switch>
      <ContentMain>{children}</ContentMain>
    </Switch>
  );
}

SwitchRoutes.propTypes = switchRoutesPropTypes;

// export const isAdminAccount = () =>
//   USER_ROLE === userRole.adminAccount ||
//   USER_ROLE === userRole.owner ||
//   USER_ROLE === userRole.oldSubUser;

// const defaultPathName = isAdminAccount() ? '/profile' : '/account';
const defaultPathName = '';

export function DefaultRoute() {
  return (
    <Route
      exact
      path="/"
      component={() => (
        <Redirect
          to={{
            pathname: defaultPathName
          }}
        />
      )}
    />
  );
}
