import React from 'react';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import BrandLogo from '../../images/navbar-logo.png';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const ItemGroup = Menu.ItemGroup;

class MyHeader extends React.Component {
  state = {
    current: 'mail'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <Header className="main-header">
        <div className="brand-logo">
          <img
            className="brand-logo-img"
            src={BrandLogo}
            alt="Saijou International Logo"
          />
        </div>
        <div className="main-navbar">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />
              Navigation Two
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  <Icon type="setting" />
                  Navigation Three - Submenu
                </span>
              }
            >
              <ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </ItemGroup>
              <ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </Header>
    );
  }
}

export default MyHeader;
