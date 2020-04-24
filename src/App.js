import React,{useEffect} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Checkout from './components/checkout/Checkout';
import Burgerbuilder from './components/burgerBuilder/Burgerbuilder';
import Orders from './components/orders/Orders';
//import { fetchIngredients } from '../src/actions/burgerBuilderAction';
//Redux stuff
import { Provider } from 'react-redux';
import store from './store';




const App = () => {
  
return (
  <Provider store = {store}>
  <Router>
      <div>
      <Layout>
          <Switch>
          <Route exact path = '/' component = {Burgerbuilder} />
          <Route path = '/checkout' component = {Checkout} /> 
          <Route path = '/orders' component = {Orders} /> 
          
         </Switch>
      </Layout>
      </div>
  </Router>
  </Provider>
    );
}

  


export default App;
