import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.object.isRequired
};

class Jumbotron extends Component {
  render() {
    return <main>{this.props.data.tagline}</main>;
  }
}

Jumbotron.propTypes = propTypes;
export default Jumbotron;
