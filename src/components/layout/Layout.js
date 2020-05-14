import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
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
          isAuth = {props.isAuthenticated}
          drawerToggleClicked = {handleSideDrawerToggle} />
          <SideDrawer 
          isAuth = {props.isAuthenticated}
          closed = {handleSideDrawerClosed}
          open = {sideDrawerShow}
          />
           <main className = {classes.Content}>{props.children}</main>
        </Fragment>
    );
}

const mapStateToProps = state => ({
   isAuthenticated: state.authReducer.token !== null
});

export default connect(mapStateToProps)(Layout);