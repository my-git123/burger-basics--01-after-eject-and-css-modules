import React, { useEffect} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Checkout from './components/checkout/Checkout';
import Burgerbuilder from './components/burgerBuilder/Burgerbuilder';
import Orders from './components/orders/Orders';
import Auth from './components/auth/Auth';
import Logout from './components/auth/logout/Logout';
import {userAutoLoaded} from './actions/authAction';
//Redux stuff
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => store.dispatch(userAutoLoaded()),[]);

return (
  <Provider store = {store}>
  <Router>
      <div>
      <Layout>
          <Switch>
          <Route exact path = '/' component = {Burgerbuilder} />
          <Route path = '/checkout' component = {Checkout} /> 
          <Route path = '/auth' component = {Auth} />
          <Route path = '/logout' component = {Logout} /> 
          <Route path = '/orders' component = {Orders} /> 
          
         </Switch>
      </Layout>
      </div>
  </Router>
  </Provider>
    );
}

 
export default App;
