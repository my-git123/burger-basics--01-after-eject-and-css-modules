import axios from '../axios-orders';
import { PURCHASE_SUCCESS,
         PURCHASE_FAIL,
         PURCHASE_START,
         PURCHASE_INIT,
         FETCH_ORDER_SUCCESS,
         FETCH_ORDER_FAIL,
         FETCH_ORDER_START
         } from './types';

//Purchase success
export const purchaseSuccess = (orderId, orderData) =>  {
    return{
        type:PURCHASE_SUCCESS,
        payload:orderId,orderData
    }
}
//Purchase start
export const purchaseStart = () => {
    return {
        type: PURCHASE_START
    }
}
//Purchase order
export const purchaseOrder = (orderData,token) => async dispatch => {
    try {
        dispatch(purchaseStart());
        const res = await axios.post('/orders.json?auth=' + token, orderData);
        //console.log(res);
        dispatch(purchaseSuccess(res.data.name,orderData));
       
    }
       
    catch (error) {
        dispatch({
            type: PURCHASE_FAIL,
            payload: {msg: error.response.statusText, status: error.response.status}
        });
    }
}

//Purchase fail
export const purchaseFail = (error) => dispatch => {
    dispatch({
        type: PURCHASE_FAIL,
        payload: {msg: error.response.statusText, status: error.response.status}
    });
}
//Purchase Burger Initiate
export const initiatePurchase = () => dispatch => {
    dispatch({
        type: PURCHASE_INIT
    });
}
//Fetch order start
export const fetchOrderStart = () => dispatch => {
    dispatch({
        type:FETCH_ORDER_START
    })
}
//Fetch order success
export const fetchOrderSuccess = (orders) => {
    return {
        type:FETCH_ORDER_SUCCESS,
        payload:orders
    }
}
//Fetch order Fail
export const fetchOrderFail = (error) => {
    return {
        type:FETCH_ORDER_FAIL,
        payload:{ msg:error.response.statusText, status:error.response.status}
    }
}
//Fetch orders
export const fetchOrders = (token,userId) => async dispatch => {
    try {
        dispatch(fetchOrderStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        const res = await axios.get('/orders.json' + queryParams);
        const fetchedOrders = [];
        for ( let key in res.data) {
            //fetchedOrders.push(res.data[key]);
            fetchedOrders.push({...res.data[key], id:key});
        }
        dispatch(fetchOrderSuccess(fetchedOrders));
         //setOrderState({loading:false,orders: fetchedOrders});
         console.log(fetchedOrders);
    } catch (error) {
         //setOrderState({loading:false});
         dispatch({
            type:FETCH_ORDER_FAIL,
            payload:{ msg:error.response.statusText, status:error.response.status}
        });
    }

}
//Fetch order initiate
// export const fetchOrderInit = () => dispatch => {
//     dispatch({
//         type:FETCH_ORDER_INIT
//     });
// }
