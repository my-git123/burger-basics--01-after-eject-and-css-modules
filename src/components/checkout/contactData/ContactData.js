import React,{ useState, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../ui/button/Button';
import classes from './contactData.css';
//import axios from '../../../axios-orders';
import Spinner from '../../ui/spinner/Spinner';
import Input from '../../ui/input/Input';
import { purchaseOrder } from '../../../actions/orderAction';

const ContactData = ({ings, price,token, loading, purchaseOrder, userId}) => {
   const [contactInfo, setContactInfo] = useState({
    name:'' ,
    email:'' ,
    city: '',
    street: '',
    postalCode: '',
    delieveryMethod: ''
      
   });
   //const [loading, setLoading] = useState(false);
   const {name,email, city, street, postalCode,deliveryMethod} = contactInfo;

   const handleChange = event => {
       setContactInfo({...contactInfo, [event.target.name]: event.target.value});
   }

   const handleorder = (event) => {
       event.preventDefault();
       //console.log(ingredients);
       //setLoading(true);
        //alert('You want to continue with your order');
        
        const order = {
            ingredients: ings,
            price:price,
            orderData: contactInfo,
            userId: userId
         }
         purchaseOrder(order,token);
        // axios.post('/orders.json',order)
        // .then(res => {setLoading(false);
        //     history.push('/');
        //     //setPurchasing(false);
        // })
        // .catch(error => {setLoading(false);
        //     //setPurchasing(false);
        // });
   }
    
    return (
        
        <div className = {classes.ContactData}>
            <h4><strong>Please Enter Your Contact Information</strong></h4>
            {loading ? <Spinner /> : (<Fragment>
            <form onSubmit = {handleorder}>
              <Input inputtype = "input" 
                     type = "text" 
                     name = "name" 
                     placeholder = "Your Name"
                     value = {name} 
                     onChange = {event => handleChange(event)}
                     required />
              <Input inputtype = "input" 
                     type = "email" 
                     name = "email" 
                     placeholder = "Your E-mail"
                     value = {email} 
                     onChange = {event => handleChange(event)}
                     required />
              <Input inputtype = "input" 
                     type = "text" 
                     name = "street"
                     placeholder = "Street"
                     value = {street} 
                     onChange = {event => handleChange(event)} />
                <Input inputtype = "input" 
                     type = "text" 
                     name = "city"
                     placeholder = "City"
                     value = {city} 
                     onChange = {event => handleChange(event)} />
              <Input inputtype = "input" 
                     type = "text" 
                     name = "postalCode" 
                     placeholder = "Postal Code"
                     value = {postalCode} 
                     onChange = {event => handleChange(event)}
                     required />
            <Input inputtype = "select" 
                     type = "text" 
                     name = "deliveryMethod" 
                     placeholder = "Select delivery method"
                     value = {deliveryMethod} 
                     onChange = {event => handleChange(event)} />
              <Button btnType = "Success">Order Here</Button>
            </form>
            </Fragment>
            )}
        </div>
                
            )
}

ContactData.propTypes = {
  ings: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  purchaseOrder:PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  userId:PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    ings: state.burgerBuilderReducer.ingredients,
    price:state.burgerBuilderReducer.price,
    loading:state.orderReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId

});

export default connect(mapStateToProps, { purchaseOrder})(ContactData);
