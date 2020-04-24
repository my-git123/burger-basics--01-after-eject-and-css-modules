import React from 'react';
import PropTypes from 'prop-types';
import classes from './order.css';

const Order = ({ingredients,price}) => {
    const finalIngredients = [];
    for (let ingredientName in ingredients) {
        finalIngredients.push(
            {
                name:ingredientName,
                qty:ingredients[ingredientName]
            }
            );
    }
    const ingredientOutput = finalIngredients.map(ing => {
        return <span 
                style = {{textTransform:'capitalize',
                         display:'inline-block',
                         margin: '0,8px',
                         border:'1px solid #ccc',
                         padding:'5px'
                        }}
                 key = {ing.name}>
                 {ing.name}:{ing.qty}
                 </span>

    });
    return (
        <div className = {classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Price:<strong>USD:{price}</strong></p>
        </div>
    )
}

Order.propTypes = {
    ingredients:PropTypes.object.isRequired,
    price:PropTypes.number.isRequired
}

export default Order;
