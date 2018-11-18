import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const ContentLayout = props => (
  <div>
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
);

export default ContentLayout;
