import React from 'react';
import { connect } from 'react-redux';
import { useHistory,Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutSummary from '../order/CheckoutSummary';
import ContactData from '../checkout/contactData/ContactData';


const Checkout = ({match,ings, initiatePurchase,purchasing}) => {
    let history = useHistory();
    // useEffect(() => {
    //     console.log('abrakadabra');
    //     console.log(purchasing);
    //     initiatePurchase();
    // },[]);

    
  const handleCheckoutCancel = () => {
      history.goBack();
  }

  const handleCheckoutContinue = () => {
      history.replace('/checkout/contact-data');
  }

  let checkoutSummary = <Redirect to = "/" />
  if (ings) {
      const purchaseRedirect = purchasing ? <Redirect to = '/'/> : null;
       
      checkoutSummary = ( 
                        <div>
                        {purchaseRedirect}
                        <CheckoutSummary 
                          ingredients = {ings}
                          checkOutContinue = {handleCheckoutContinue}
                          checkOutCancel = {handleCheckoutCancel}/>

                          <Route path = {match.path +'/contact-data'} 
                          component ={ContactData} />
                          </div>
                          );
        }

         return  checkoutSummary;
          
    }

Checkout.propTypes = {
    ings: PropTypes.object,
    purchasing: PropTypes.bool.isRequired
    
}

const mapStateToProps = state => ({
    ings: state.burgerBuilderReducer.ingredients,
    purchasing:state.orderReducer.purchasing
    //price:state.burgerBuilderReducer.price

});

export default connect(mapStateToProps)(Checkout);
