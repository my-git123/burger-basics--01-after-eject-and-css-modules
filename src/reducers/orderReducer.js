import { PURCHASE_SUCCESS,
         PURCHASE_FAIL,
         PURCHASE_START,
         PURCHASE_INIT,
         FETCH_ORDER_SUCCESS,
         FETCH_ORDER_FAIL,
         FETCH_ORDER_START} from '../actions/types';

const initialState = {
    orders: [],
    loading:false,
    purchasing:false,
    error :{}
}
export default function( state = initialState, action) {
    const { type, payload }= action;

    switch (type) {
        case PURCHASE_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat(payload),
                loading:false,
                purchasing:true
            }
        case PURCHASE_FAIL:
            return {
                ...state,
                loading:false,
                error: payload
            }
        case PURCHASE_START:
            return {
                ...state,
                loading:true
            }
        case PURCHASE_INIT:
            return {
                ...state,
                purchasing:false
            }
        case FETCH_ORDER_SUCCESS:
            return {
                ...state,
                orders:payload,
                loading:false
            }
        case FETCH_ORDER_FAIL:
            return {
                ...state,
                error:payload,
                loading:false
            }
        case FETCH_ORDER_START:
            return {
             ...state,
             loading:true
            }
            
        default:
            return state;
    }
}


