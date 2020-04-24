import { ADD_INGREDIENT,
         REMOVE_INGREDIENT, 
         FETCH_INGREDIENTS,
         ERROR_INGREDIENTS} from '../actions/types';

const initialState = {
    ingredients: {},
    error: false,
    price:4
};
const INGREDIENTS_PRICE = {
    salad:1,
    bacon:2,
    cheese:1.5,
    meat:2.5
}

export default function(state = initialState, action){
    const { type,payload} = action;
    switch(type){
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [payload]:state.ingredients[payload] + 1
                },
                price: state.price + INGREDIENTS_PRICE[payload]

            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [payload]:state.ingredients[payload] - 1
                },
                price: state.price - INGREDIENTS_PRICE[payload]
            }
        case FETCH_INGREDIENTS:
            return {
                ...state,
                ingredients: payload,
                error:false
            }
        case ERROR_INGREDIENTS:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
    
 
}