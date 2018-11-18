import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import Button from 'antd/lib/button';

const { Header, Footer, Content } = Layout;

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

const Welcome = Loadable({
  loader: () => import('./Welcome'),
  loading: () => null
});

class Home extends Component {
  switchLocale = locale => e => {
    e.preventDefault();
    console.log(locale);
    this.props.reduxAction.switchLocale(locale);
  };
  render() {
    console.log(this.props.intl);
    return (
      <div>
        <Link to="about">About</Link>
        <Welcome />
        <Button onClick={this.switchLocale('en')}>en</Button>
        <Button onClick={this.switchLocale('jp')}>jp</Button>
        {this.props.intl.messages.greeting}
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
