import React, { Fragment, useState } from 'react';
//import PropTypes from 'prop-types';
import classes from './layout.css';
import Toolbar from '../navigation/toolbar/Toolbar';
import SideDrawer from '../navigation/sideDrawer/SideDrawer';


const Layout = (props) => {

  const [sideDrawerShow, setSideDrawerShow] = useState(false);

  const handleSideDrawerClosed = () => {
     setSideDrawerShow(false);
  }

  const handleSideDrawerToggle = () => {
     setSideDrawerShow(!sideDrawerShow);
  }
      return ( 
        <Fragment> 
          <Toolbar 
          drawerToggleClicked = {handleSideDrawerToggle} />
          <SideDrawer 
          closed = {handleSideDrawerClosed}
          open = {sideDrawerShow}
          />
           <main className = {classes.Content}>{props.children}</main>
        </Fragment>
    );
}

export default Layout;