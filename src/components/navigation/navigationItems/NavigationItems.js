import React from 'react'
import PropTypes from 'prop-types';
import classes from './navigationItems.css';
import NavigationItem from './navigationItem/NavigationItem';

const NavigationItems = ({isAuthenticated}) => (
        <ul className = {classes.NavigationItems}>
            <NavigationItem  exact link = "/" >Burger Builder</NavigationItem>
            {isAuthenticated ?
              (<NavigationItem link = "/orders">Orders</NavigationItem>): null }
            {isAuthenticated ? 
            (<NavigationItem link = "/logout">Logout</NavigationItem>):
            (<NavigationItem link = "/auth">Authentication</NavigationItem>) 
            }
        </ul>
    );


NavigationItems.propTypes = {
  isAuthenticated:PropTypes.bool.isRequired
}

export default NavigationItems;
