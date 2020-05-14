import React, { useEffect } from 'react';
//import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authLogout } from '../../../actions/authAction'
import { connect } from 'react-redux';

const Logout = ({authLogout}) => {
    useEffect(() => {
        authLogout();
    },[]);
    
    return (
        <div>
            <Redirect to = '/' />
        </div>
    )
}

Logout.propTypes = {
  authLogout:PropTypes.func.isRequired
}

export default connect(null, { authLogout })(Logout);
