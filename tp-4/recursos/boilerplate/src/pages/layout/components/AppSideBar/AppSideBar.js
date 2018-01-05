import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import './appSideBar.scss';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Sider, Content } = Layout;

class AppSideBar extends React.Component {
  showMessage = () => {
    if (this.props.trabajandoEnServidor) {
      return <div>Trabajando en el Server...</div>
    }else{
      return <div>NO haciendo nada</div>
    }
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col md={12} lg={12} xs={24}>
            <Sider>
              <div className="logo">
                Sovos Reactivo
              </div>
              <Menu
                theme="dark"
                mode="vertical"
                defaultSelectedKeys={['1']}
              >
                <Menu.Item key="1">
                   <Link to="/home">
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/posts">
                    <span>Posts</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            {this.showMessage()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppSideBar;
