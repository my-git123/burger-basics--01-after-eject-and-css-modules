import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Order from '../order/Order';
import { fetchOrders} from '../../actions/orderAction';
import Spinner from '../ui/spinner/Spinner';
//import axios from '../../axios-orders';

const Orders = ({orders,loading,fetchOrders, token, userId}) => {
//  const [orderState, setOrderState] = useState({
//      orders:[],
//      loading: true
//  });
 //const [loading,setLoading] = useState(ftrue);

useEffect(() => {
    fetchOrders(token,userId);
},[]);

    // useEffect(() => {
    //     const fetchData = async () => { 
    //         try {
    //             const res = await axios.get('/orders.json');
    //             const fetchedOrders = [];
    //             for ( let key in res.data) {
    //                 //fetchedOrders.push(res.data[key]);
    //                 fetchedOrders.push({...res.data[key], id:key});
    //             }
    //              setOrderState({loading:false,orders: fetchedOrders});
    //              console.log(fetchedOrders);
    //         } catch (err) {
    //              setOrderState({loading:false});
    //         }
    //             }
    //     fetchData();
    // },[]);
    let theOrders = <Spinner />;
    if(!loading) {
        theOrders = orders.map(order => (<Order key = {order.id}
                                       ingredients = {order.ingredients}
                                       price = {order.price}/>))
                 }
        
    return (
        <div>{theOrders}</div>
    );
}

Orders.propTypes = {
  fetchOrders:PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired,
  loading:PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  userId:PropTypes.string.isRequired
}

const mapStateToProps = state =>({
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    token: state.authReducer.token,
    userId:state.authReducer.userId
});

export default connect(mapStateToProps,{fetchOrders})(Orders);
