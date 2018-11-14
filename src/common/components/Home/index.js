import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Layout } from 'antd';
import Button from 'antd/lib/button';

const { Header, Footer, Content } = Layout;

const propTypes = {
  reduxAction: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

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
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>
              <Link to="about">About</Link>
              <Button onClick={this.switchLocale('en')}>en</Button>
              <Button onClick={this.switchLocale('jp')}>jp</Button>
              {this.props.intl.messages.greeting}
            </Content>
            {/* <Content>yellow</Content> */}
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

Home.propTypes = propTypes;
export default Home;
