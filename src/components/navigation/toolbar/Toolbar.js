import React from 'react'
import PropTypes from 'prop-types';
import classes from './toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';
import DrawerToggle from '../sideDrawer/drawerToggle/DrawerToggle';

const Toolbar = ({drawerToggleClicked}) => (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked = {drawerToggleClicked}/>
        <div className = {classes.Logo}>
         <Logo />
        </div>
        <nav className = {classes.DesktopOnly}>
          <NavigationItems />
        </nav>
    </header>
    );


Toolbar.propTypes = {
  drawerToggleClicked:PropTypes.func.isRequired
}

export default Toolbar;
