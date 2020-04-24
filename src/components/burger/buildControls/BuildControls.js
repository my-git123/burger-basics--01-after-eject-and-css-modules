import React from 'react';
import PropTypes from 'prop-types';
import classes from './buildControls.css';
import BuildControl from './buildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];
const BuildControls = ({ingredientAdded,
    ingredientRemoved,
    disableControl,
    currentPrice,
    purchaseAble,
    ordered
           }) => {
    return (
        <div className = {classes.buildControls}>
           <p>The current price is: <strong>{currentPrice}</strong></p>
           {controls.map(control => {
            return <BuildControl key = {control.label}
            label = {control.label}
            onAdd = {() => ingredientAdded(control.type)}
            onRemove = {() => ingredientRemoved(control.type)}
            disableControl = {disableControl[control.type]}
            />
        })}

        <button className = {classes.OrderButton} 
                disabled = {!purchaseAble}
                onClick = {ordered}>Order Now</button>
           
        </div>
    )
}

BuildControls.propTypes = {
    ingredientAdded:PropTypes.func.isRequired,
    ingredientRemoved:PropTypes.func.isRequired,
    disableControl:PropTypes.object.isRequired,
    currentPrice: PropTypes.number.isRequired,
    purchaseAble:PropTypes.bool.isRequired,
    ordered:PropTypes.func.isRequired
}

export default BuildControls;
