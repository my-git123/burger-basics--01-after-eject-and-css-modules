//import axios from '../../axios-orders';
import axios from 'axios';
import { ADD_INGREDIENT,
         REMOVE_INGREDIENT,
         SET_INGREDIENTS,
         ERROR_INGREDIENTS } from './types';

//Add ingredient
export const addIngredient = ingName => dispatch => {
    dispatch({
        type:ADD_INGREDIENT,
        payload:ingName
    });
}
   
//Remove ingredient
export const removeIngredient = ingName => dispatch => {
    dispatch({
        type:REMOVE_INGREDIENT,
        payload:ingName
    });
}
//set ingredients
export const setIngredients = (ingredients) => {
    return {
        type: SET_INGREDIENTS,
        payload: ingredients
    };
}

// Fetch ingredients from backend
export const fetchIngredients = () => async dispatch => {
        try {
        const res = await axios.get('https://healthyburgersapp.firebaseio.com/ingredients.json');
            dispatch(setIngredients(res.data));
                
    } catch (err) {
        dispatch({
            type: ERROR_INGREDIENTS
            //payload: {msg: err.response.statusText,status: err.response.status}
        });
    }
}
//*****************************************************************
// export const fetchIngredients = () => async dispatch => {
//     try {
//     const res = await axios.get('https://healthyburgersapp.firebaseio.com/ingredients.json');
//         console.log('Dispatching result');
//         dispatch({
//             type:FETCH_INGREDIENTS,
//             payload: res.data 
//         })         
// } catch (err) {
//     dispatch({
//         type: ERROR_INGREDIENTS
//         //payload: {msg: err.response.statusText,status: err.response.status}
//     });
// }
// }


