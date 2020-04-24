import React from 'react';
import PropTypes from 'prop-types';
import classes from './buildControl.css';

const BuildControl = ({label, onAdd, onRemove,disableControl}) => {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}>{label}</div>
            <button onClick = {onAdd} className = {classes.More}>Add</button>
              <button onClick = {onRemove} className = {classes.Less} disabled = {disableControl}>Remove</button>
        </div>
    )
}

BuildControl.propTypes = {
   label: PropTypes.string.isRequired,
   onAdd:PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired,
   disableControl:PropTypes.bool.isRequired
}

export default BuildControl;
