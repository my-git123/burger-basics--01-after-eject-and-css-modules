import { ADD_INGREDIENT,
         REMOVE_INGREDIENT, 
         SET_INGREDIENTS,
         ERROR_INGREDIENTS} from '../actions/types';

const initialState = {
    ingredients:null,
    error: false,
    price:4,
    building:false
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
                building:true,
                price: state.price + INGREDIENTS_PRICE[payload]

            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [payload]:state.ingredients[payload] - 1
                },
                building:true,
                price: state.price - INGREDIENTS_PRICE[payload]
            }
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    ...payload},
                price:4,
                building:false,
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