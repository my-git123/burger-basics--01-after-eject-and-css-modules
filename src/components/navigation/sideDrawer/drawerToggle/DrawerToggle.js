import React from 'react';
import PropTypes from 'prop-types';
import classes from './drawerToggle.css';

const DrawerToggle = ({clicked}) => {
    return (
        <div className = {classes.DrawerToggle} onClick = {clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

DrawerToggle.propTypes = {
    clicked: PropTypes.bool.isRequired
}

export default DrawerToggle;
