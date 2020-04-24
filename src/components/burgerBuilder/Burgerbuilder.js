import React, { Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Burger from '../burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/orderSummary/OrderSummary';
//import axios from '../../axios-orders';
import Spinner from '../ui/spinner/Spinner';
import { addIngredient, removeIngredient, fetchIngredients} from '../../actions/burgerBuilderAction';


const Burgerbuilder = ({ings,
                       addIngredient,
                       removeIngredient,
                       fetchIngredients,
                       price,
                       error
                       }) => {
    
    // const [ingredients, setIngredients] = useState({
    //     cheese:0,
    //     salad:0,
    //     meat:0,
    //     bacon:0,
    // });

        useEffect(() => {
        console.log('Calling use Effect function..');
        // const fetchData = async () => {
        // const res = await axios.get('https://healthyburgersapp.firebaseio.com/ingredients.json');
        //    setIngredients(res.data);
        // }
        // fetchData(); 
        fetchIngredients();
       },[]);

    //const [price,setPrice] = useState(4);
    let history = useHistory();
    const[purchasing,setPurchasing] = useState(false);
    const [loading,setLoading] = useState(false);
    
    const updatePurchaseAble = (ings) => {
        const sum = Object.keys(ings).map(ingKey => ings[ingKey])
        .reduce((sum,el) => {
            return sum + el
        }, 0);
        return sum > 0;
    }

    const handlePurchase = () => {
        setPurchasing(true);
    }

    const handlePurchaseCancel = () => {
        setPurchasing(false);
    }

    const  handlePurchaseContinue = () => {
    //     const queryParams = [];
    // for ( let i in ings) {
    //     queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ings[i]));
    //     }

    // queryParams.push('price=' + price);
    //     const queryString = queryParams.join('&');
    //        history.push({
    //            pathname: '/checkout',
    //            search: '?' + queryString
    //         });
    history.push('/checkout');
}
    //  const addIngredient = (type) => { 
    //   setIngredients(prevValue => { 
    //     return {...prevValue,
    //    [type]: prevValue[type]+ 1
    //   }});
                         
    //   const changePrice = INGREDIENTS_PRICE[type];
    //       setPrice(changePrice + price);
    //  }
   
    // const removeIngredient = (type) => {
    //     setIngredients(prevValue => {
    //         return {
    //                 ...prevValue,
    //                  [type]: prevValue[type] - 1
    //             }
    //         });
                         
    //         const newPrice = INGREDIENTS_PRICE[type];
    //         setPrice(price - newPrice);
    //     }

    const checkIngredients = {...ings};
        
        for (let i in checkIngredients) {
             checkIngredients[i]= checkIngredients[i] <= 0
         }
       console.log('Calling return'+JSON.stringify(ings));
    return (
        <Fragment>
        <Modal show = {purchasing} modalClosed = {handlePurchaseCancel} >
        {loading ? <Spinner /> : <Fragment>
          <OrderSummary 
          ingredients = {ings}
          price = {price}
          purchaseCancelled = {handlePurchaseCancel}
          purchaseContinued = {handlePurchaseContinue}
          />
          </Fragment>
        }
        </Modal>
        {ings ? (
            <Fragment>
            <Burger ingredients = {ings} />
            <BuildControls ingredientAdded = {addIngredient}
                       ingredientRemoved = {removeIngredient}
                       disableControl = {checkIngredients}
                       currentPrice = {price}
                       purchaseAble = {updatePurchaseAble(ings)}
                       ordered = {handlePurchase}
         />
            </Fragment>
        ) : <Spinner />}
                
        </Fragment>
    )
}

Burgerbuilder.propTypes = {
addIngredient:PropTypes.func.isRequired,
removeIngredient:PropTypes.func.isRequired,
//setIngredients:PropTypes.func.isRequired,
fetchIngredients:PropTypes.func.isRequired,
ings:PropTypes.object.isRequired,
price:PropTypes.number.isRequired
}
const mapStateToProps = state => ({
    ings: state.burgerBuilderReducer.ingredients,
    price: state.burgerBuilderReducer.price,
    error: state.burgerBuilderReducer.error
});

export default connect(mapStateToProps,{addIngredient, removeIngredient, fetchIngredients })(Burgerbuilder);
