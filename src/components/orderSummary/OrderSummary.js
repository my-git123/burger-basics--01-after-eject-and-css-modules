import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/button/Button';

const OrderSummary = ({ingredients, purchaseCancelled, purchaseContinued,price}) => {
    //console.log('Order summary data -'+JSON.stringify(ingredients));
    const ingredientSummary = Object.keys(ingredients)
    .map(ingKey => {
        return (
            <li key={ingKey}>
               <span style = {{ textTransform:'capitalize'}}>
                 {ingKey}</span>:{ingredients[ingKey]}
            </li>)
    });
    //console.log(ingredientSummary);

    return (
        <Fragment>
            <h3>Order Summary</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
               {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price}</strong></p>
            <p>Continue Checkout?</p>
            <Button btnType = "Danger" clicked = {purchaseCancelled}>Cancel</Button>
            <Button btnType = "Success" clicked = {purchaseContinued}>Continue</Button>

        </Fragment>
    )
}


OrderSummary.propTypes = {
ingredients:PropTypes.object.isRequired,
purchaseCancelled: PropTypes.func.isRequired,
purchaseContinued: PropTypes.func.isRequired,
price: PropTypes.number.isRequired
}

export default OrderSummary;
