import React from 'react';
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import { StaticRouter } from 'react-router-dom';
import compression from 'compression';
// import App from '../common/containers/App';
import stats from '../../build/react-loadable.json';
// import LocaleProvider from 'antd/lib/locale-provider';
// import enUS from 'antd/lib/locale-provider/en_US';
import configureStore from '../common/store/configureStore';
import express from 'express';
// import { fetchCounter } from '../common/api/counter';
// import qs from 'qs';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import {
  // saveStateToSessionStorage,
  loadStateFromSessionStorage
} from '../common/helpers';

import getRoutes from '../common/routes';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();

server
  .disable('x-powered-by')
  .use(compression())
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    match(
      { routes: getRoutes(), location: req.url },
      (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message);
        } else if (redirectLocation) {
          res.redirect(
            302,
            redirectLocation.pathname + redirectLocation.search
          );
        } else if (renderProps) {
          // You can also check renderProps.components or renderProps.routes for
          // your "not found" component or route respectively, and send a 404 as
          // below, if you're using a catch-all route.
          const context = {};
          const modules = [];

          const preloadedState = loadStateFromSessionStorage();

          // Create a new Redux store instance
          const store = configureStore(preloadedState);
          const markup = renderToString(
            <Capture report={moduleName => modules.push(moduleName)}>
              <StaticRouter context={context} location={req.url}>
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              </StaticRouter>
            </Capture>
          );

          const finalState = store.getState();

          if (context.url) {
            res.redirect(context.url);
          } else {
            const bundles = getBundles(stats, modules);
            const chunks = bundles.filter(bundle =>
              bundle.file.endsWith('.js')
            );
            const styles = bundles.filter(bundle =>
              bundle.file.endsWith('.css')
            );

            res.send(`<!doctype html>
              <html lang="en">
              <head>
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta charSet='utf-8' />
                  <title>Razzle Redux Example</title>
                  <meta name="description" content="A page's description, 
  usually one or two sentences."/>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                   ${
                     assets.client.css
                       ? `<link rel="preload" href="${
                           assets.client.css
                         }" as="style">`
                       : ''
                   }
                  ${styles
                    .map(style => {
                      return `<link rel="preload" href="${
                        style.file
                      }" as="style">`;
                    })
                    .join('\n')}
              </head>
              <body>
                <div id="root">${markup}</div>
                <script>
                  window.__PRELOADED_STATE__ = ${serialize(finalState)}
                </script>
                ${
                  process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}"></script>`
                    : `<script src="${assets.client.js}" crossorigin></script>`
                }
                ${chunks
                  .map(chunk =>
                    process.env.NODE_ENV === 'production'
                      ? `<script src="/${chunk.file}"></script>`
                      : `<script src="http://${process.env.HOST}:${parseInt(
                          process.env.PORT,
                          10
                        ) + 1}/${chunk.file}"></script>`
                  )
                  .join('\n')}
                <script>window.main();</script>
              </body>
          </html>`);
          }
        } else {
          res.status(404).send('Not found');
        }
      }
    );
    // fetchCounter(apiResult => {
    //   // Read the counter from the request, if provided
    //   const params = qs.parse(req.query);
    //   const counter = parseInt(params.counter, 10) || apiResult || 0;

    // Compile an initial state
  });

export default server;
