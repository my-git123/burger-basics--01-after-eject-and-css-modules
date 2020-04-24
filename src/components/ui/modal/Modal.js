import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classes from './modal.css';
import Backdrop from './backdrop/Backdrop';

const Modal = ({show, children, modalClosed}) => (
       <Fragment>
          <Backdrop show = {show} clicked = {modalClosed} />
          
          <div className = {classes.Modal}
             style = {{
                 transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                 opacity: show ? '1' :'0'
             }}>
            {children}
          </div>
        </Fragment>
    );

    Modal.propTypes = {
        show: PropTypes.bool.isRequired,
        modalClosed:PropTypes.func.isRequired
    }

export default Modal;
