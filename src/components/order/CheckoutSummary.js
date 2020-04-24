import React from 'react';
import PropTypes from 'prop-types';
import Burger from '../burger/Burger';
import classes from './checkoutSummary.css';
import Button from '../ui/button/Button';

const CheckoutSummary = ({ingredients, btnType, checkOutCancel, checkOutContinue}) => {
    return (
        <div className = {classes.CheckoutSummary}>
            <h1>Its delicious..</h1>
            <div style = {{height:'300px', width:'100%',margin:'auto'}}>
               <Burger ingredients = {ingredients} />
            </div>
            <Button 
                btnType = 'Success'
                clicked = {checkOutContinue}>Continue</Button>
            <Button 
                btnType = 'Danger'
                clicked = {checkOutCancel}>Cancel</Button>
        </div>
    )
}

CheckoutSummary.propTypes = {
    ingredients : PropTypes.object.isRequired,
    btnType:PropTypes.string.isRequired,
    checkOutCancel:PropTypes.func.isRequired,
    checkOutContinue:PropTypes.func.isRequired
}

export default CheckoutSummary;

