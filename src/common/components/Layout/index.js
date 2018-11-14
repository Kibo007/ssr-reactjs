import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;
