import React, {Component} from 'react';
import {Route, Switch, withRouter,Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Urunler from './containers/Urunler/Urunler';
import CheckOut from './containers/CheckOut/CheckOut';
import Orders from './containers/CheckOut/Orders/Orders';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import {connect} from 'react-redux';
import * as actions from './store/actions/index';
import Kategoriler from './containers/Kategoriler/Kategoriler';



class App extends Component {
  componentDidMount(){
     this.props.onAuthState();
  }
  render () {
  let routes = (
    <Switch>
      <Route path='/checkout' component= {CheckOut}/>
      <Route path='/login' component={Auth}/>
      <Route path='/kategoriler' component={Kategoriler}/>
      <Route path='/' exact component= {Urunler}/>
      <Redirect to='/'/>
    </Switch>
  );
  
  if(this.props.isAuthenticated){
    routes=(
      <Switch>
        <Route path='/checkout' component= {CheckOut}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/login' component={Auth}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/' exact component= {Urunler}/>
        <Redirect to='/'/>
      </Switch>
    );
  }

  return (
      <div>
        <Layout>
          <Switch>
            {routes}
          </Switch>
        </Layout>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    onAuthState: ()=> dispatch(actions.authCheckState())
  };
};

export default withRouter(connect (mapStateToProps, mapDispatchToProps) (App));
