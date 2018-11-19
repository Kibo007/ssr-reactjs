import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object
};
const defaultProps = {
  intl: {}
};

const Jumbotron = Loadable({
  loader: () => import('./Jumbotron'),
  loading: () => null
});

class Home extends Component {
  render() {
    const { intl } = this.props;
    return (
      <main>
        <Jumbotron data={intl.messages.jumbotron} />
      </main>
    );
  }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
export default Home;
