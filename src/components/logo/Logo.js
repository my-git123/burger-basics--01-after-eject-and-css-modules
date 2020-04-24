import React from 'react';
//import PropTypes from 'prop-types';
import burgerLogo from '../../images/burgerLogo.png';
import classes from './logo.css';

const Logo = props => {
    return (
        <div className = {classes.Logo} style = {{height:props.height}}>
            <img src = {burgerLogo} alt = "My-Burger" />
        </div>
    )
}

// Logo.propTypes = {

// }

export default Logo;
