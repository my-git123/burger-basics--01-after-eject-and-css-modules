import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import Backdrop from '../../ui/modal/backdrop/Backdrop';
import classes from './sideDrawer.css';

const SideDrawer = ({closed,open}) => {  
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return ( 
    <Fragment>
          <Backdrop show = {open} clicked = {closed} />
          <div className = {attachedClasses.join(' ')}>
          <div className = {classes.Logo}>
            <Logo />
          </div>
            <nav>
               <NavigationItems />
            </nav>
          </div>
        </Fragment>
    );
}


SideDrawer.propTypes = {
    closed: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired

}

export default SideDrawer;
