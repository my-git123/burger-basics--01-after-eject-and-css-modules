import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Burger from '../burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/orderSummary/OrderSummary';
//import axios from '../../axios-orders';
import Spinner from '../ui/spinner/Spinner';
import { initiatePurchase } from '../../actions/orderAction';
import { setAuthRedirectPath } from '../../actions/authAction';
import { addIngredient, removeIngredient, fetchIngredients} from '../../actions/burgerBuilderAction';


const Burgerbuilder = ({ings,
                       addIngredient,
                       removeIngredient,
                       fetchIngredients,
                       initiatePurchase,
                       price,
                       isAuthenticated,
                       setAuthRedirectPath,
                       error
                       }) => {
let history = useHistory();
const[purchasing,setPurchasing] = useState(false);
    
           useEffect(() => {
                       fetchIngredients();
               //console.log('Calling use Effect function..');
       },[]);

          
    const updatePurchaseAble = (ingredients) => {
        const sum = Object.keys(ingredients).map(ingKey => ingredients[ingKey])
        .reduce((sum,el) => {
            return sum + el
        }, 0);
        return sum > 0;
    };

    const handlePurchase = () => {
      if (isAuthenticated) {
        setPurchasing(true);
      } else {
        setAuthRedirectPath('/checkout');
        history.push('/auth');
        
      }
        
    }

    const handlePurchaseCancel = () => {
        setPurchasing(false);
    }

    const  handlePurchaseContinue = () => {
      initiatePurchase();
       history.push('/checkout');
   }
    const checkIngredients = {...ings};
        
        for (let i in checkIngredients) {
             checkIngredients[i]= checkIngredients[i] <= 0
         }
       //console.log('Calling return'+JSON.stringify(ings));

    let orderSummary = null;
    let burger = error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

  if (ings) {
    burger = (
      <Fragment>
        <Burger ingredients={ings} />
        <BuildControls ingredientAdded = {addIngredient}
                       ingredientRemoved = {removeIngredient}
                       disableControl = {checkIngredients}
                       currentPrice = {price}
                       purchaseAble = {updatePurchaseAble(ings)}
                       ordered = {handlePurchase}
                       isAuth = {isAuthenticated}
           />
     </Fragment>
    );
    orderSummary = (
        <OrderSummary 
         ingredients = {ings}
         price = {price}
         purchaseCancelled = {handlePurchaseCancel}
         purchaseContinued = {handlePurchaseContinue}
         />
    );
  }
      
    return (
            <Fragment>
              <Modal show = {purchasing} 
                     modalClosed = {handlePurchaseCancel}>
                                   
                           {orderSummary}
              </Modal>
              {burger}
           </Fragment>
        
    );
}

Burgerbuilder.propTypes = {
addIngredient:PropTypes.func.isRequired,
removeIngredient:PropTypes.func.isRequired,
initiatePurchase:PropTypes.func.isRequired,
fetchIngredients:PropTypes.func.isRequired,
ings:PropTypes.object,
price:PropTypes.number.isRequired,
error: PropTypes.bool.isRequired,
isAuthenticated:PropTypes.bool.isRequired,
setAuthRedirectPath: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    ings: state.burgerBuilderReducer.ingredients,
    price: state.burgerBuilderReducer.price,
    error: state.burgerBuilderReducer.error,
    isAuthenticated: state.authReducer.token !== null
});

export default connect(mapStateToProps,{addIngredient, 
                                        removeIngredient,
                                        fetchIngredients,
                                        initiatePurchase,
                                        setAuthRedirectPath })(Burgerbuilder);
