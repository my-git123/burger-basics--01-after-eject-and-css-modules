import React from 'react';
import classes from './button.css';
//import PropTypes from 'prop-types';

const Button = (props) => ( 
       <button 
       className = {[classes.Button, classes[props.btnType]].join(' ')}
       onClick = {props.clicked}>
            {props.children}
       </button>

    );


// Button.propTypes = {

// }

export default Button;
