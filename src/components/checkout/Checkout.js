import React from 'react';
import { connect } from 'react-redux';
import { useHistory,useLocation,Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckoutSummary from '../order/CheckoutSummary';
import ContactData from '../checkout/contactData/ContactData';

const Checkout = ({match,ings}) => {
    let history = useHistory();
    let location = useLocation();
//   const [ingredients, setIngredients] = useState({
//       salad:0,
//       cheese:0,
//       bacon:0,
//       meat:0
//   });
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//       //console.log('sujeet');
//       const query = new URLSearchParams(location.search);
//       const ingredients = {};
//       let bprice = 0;
//       for ( let param of query.entries()) {
//           if (param[0] === 'price') {
//               bprice = param[1];
//               //console.log(param[1]);
//           } else {
//             ingredients[param[0]] = +param[1];
//           }
//     }
//           //console.log(bprice);
//       setIngredients(ingredients);
//       setPrice(bprice);
//       console.log(price);
         
//     },[]);

  const handleCheckoutCancel = () => {
      history.goBack();
  }

  const handleCheckoutContinue = () => {
      history.replace('/checkout/contact-data');
  }

    return (
        <div>
            <CheckoutSummary 
            ingredients = {ings}
            checkOutContinue = {handleCheckoutContinue}
            checkOutCancel = {handleCheckoutCancel}
            />
            <Route path = {match.path +'/contact-data'} 
                   component ={ContactData} />
        </div>
    )
}

Checkout.propTypes = {
    ings: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({
    ings: state.burgerBuilderReducer.ingredients,
    //price:state.burgerBuilderReducer.price

});

export default connect(mapStateToProps)(Checkout);
