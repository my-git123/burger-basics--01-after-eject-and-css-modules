import React from 'react';
import PropTypes from 'prop-types';
import classes from './backdrop.css';

const Backdrop = ({show, clicked}) => (
    show ? (<div className = {classes.Backdrop} onClick = {clicked}></div>) : null
);

    
Backdrop.propTypes = {
show: PropTypes.bool.isRequired,
clicked:PropTypes.bool.isRequired
}

export default Backdrop;
