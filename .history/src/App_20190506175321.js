import React, { Component } from 'react';
import {
  Layout, Menu, Icon
} from 'antd';
import { getMenuState } from './actions/menuAction'
import { connect } from "react-redux"
import PropTypes from 'prop-types';
import {
  Link, Route, Switch, Redirect
} from "react-router-dom"
import TableMenu from './components/tableMenu';
import PhotoMenu from "./components/photomenu"
import MovieMenu from './components/moviemenu';

const {
  Header, Footer, Sider,
} = Layout;

class App extends Component {
  state = {
    collapsed: false
  };

  // componentDidMount() {
  //   this.props.getMenuState();
  // }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }

  // menuHandler = (e) => {
  //   this.props.getMenuState(e.key + '')
  // }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["0"]}
            mode="inline" >
            <Menu.Item key="0">
              <Icon type="area-chart" />
              <span>table</span>
              <Link to='/table' activeStyle={{ color: 'red' }}>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Icon type="desktop" />
              <span>photo</span>
              <Link to='/photo'>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="shrink" />
              <span>Option 2</span>
              <Link to='/movie'>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Switch>
            <Route exact path='/table' component={TableMenu} />
            <Route exact path='/photo' component={PhotoMenu} />
            <Route exact path='/movie' component={MovieMenu}/>
            <Redirect exact path='/' to={{ pathname: '/table' }} />
          </Switch>
          <Footer style={{ textAlign: 'center'}}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

App.propTypes = {
  getMenuState: PropTypes.func.isRequired,
  sign: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  sign: state.menu.sign
})

export default connect(mapStateToProps, { getMenuState })(App)