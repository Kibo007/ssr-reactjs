import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
// import App from '../common/containers/App';
import Routes from '../common/routes';

const store = configureStore(window.__PRELOADED_STATE__);

hydrate(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('../common/routes', () => {
    hydrate(
      <Provider store={store}>
        <Routes />
      </Provider>,
      document.getElementById('root')
    );
  });
}
