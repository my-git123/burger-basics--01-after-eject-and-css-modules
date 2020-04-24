import React from 'react'
//import PropTypes from 'prop-types';
import classes from './navigationItems.css';
import NavigationItem from './navigationItem/NavigationItem';

const NavigationItems = props => (
        <ul className = {classes.NavigationItems}>
            <NavigationItem  exact link = "/" >Burger Builder</NavigationItem>
            <NavigationItem link = "/orders">Orders</NavigationItem>
        </ul>
    )


// NavigationItems.propTypes = {

// }

export default NavigationItems;
