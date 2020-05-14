import React from 'react';
//import PropTypes from 'prop-types';
import classes from './input.css';

const Input = props => {
    let inputElement = null;
    switch(props.inputtype) {
        case ('input'):
            inputElement = <input className = {classes.InputElement}{...props} />
            break;
        case ('textArea'):
            inputElement = <textarea className = {classes.InputElement}{...props} />
            break;
        case ('select'):
                inputElement = (
                    <select 
                       className = {classes.InputElement}{...props}>
                       <option value = "fastest">Fast</option>
                       <option value = "cheapest">Cheap</option>
                    </select>
                    ) 
                break;
        default:
            inputElement = <input className = {classes.InputElement}{...props}/>

    }
    return (
        <div className = {classes.Input}>
            <label className = {classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    )
}

Input.propTypes = {

}

export default Input;
