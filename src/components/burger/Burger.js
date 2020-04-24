import React from 'react';
import PropTypes from 'prop-types';
import classes from './burger.css';
import BurgerIngredient from './burgerIngredients/BurgerIngredient';

const Burger = ({ingredients}) => {
    let resultIngredients = Object.keys(ingredients).map(item => {
        return [...Array(ingredients[item])].map(( _, index) => {
            return <BurgerIngredient key ={item + index} type = {item} />;
        });
      }).reduce((prevVal,currentVal) => {
        return prevVal.concat(currentVal)
    },[]);
      //console.log(resultIngredients);
      if(resultIngredients.length === 0) {
          resultIngredients = <p>Please select your ingredients</p>

      }

    return (
        <div className = {classes.burger}>
        <BurgerIngredient type = "breadTop" />
        {resultIngredients}
        <BurgerIngredient type = "breadBottom" />
            
        </div>
    )
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired

}

export default Burger;
