import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Order from '../order/Order';
import axios from '../../axios-orders';

const Orders = props => {
 const [orderState, setOrderState] = useState({
     orders:[],
     loading: true
 });
 //const [loading,setLoading] = useState(ftrue);
const {orders, loading} = orderState;

    useEffect(() => {
        const fetchData = async () => { 
            try {
                const res = await axios.get('/orders.json');
                const fetchedOrders = [];
                for ( let key in res.data) {
                    //fetchedOrders.push(res.data[key]);
                    fetchedOrders.push({...res.data[key], id:key});
                }
                 setOrderState({loading:false,orders: fetchedOrders});
                 console.log(fetchedOrders);
            } catch (err) {
                 setOrderState({loading:false});
            }
                }
        fetchData();
    },[]);
    

    return (
        <div >
          {orders.map(order => (<Order key = {order.id}
                                       ingredients = {order.ingredients}
                                       price = {order.price}/>))}
            
        </div>
    )
}

Orders.propTypes = {

}

export default Orders
