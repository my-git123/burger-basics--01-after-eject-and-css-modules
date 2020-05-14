import React,{ Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import Spinner from '../ui/spinner/Spinner';
import { auth, setAuthRedirectPath } from '../../actions/authAction';
import classes from './auth.css';

const Auth = ({ auth,
                loading,
                error,
                building,
                setAuthRedirectPath,
                authRedirectPath,
                isAuthenticated }) => {
    const [formData,setFormData] = useState({
        email: '',
        password:''
        //isSignedUp: true
    });
    const [isSignedUp,setIsSignedUp] = useState(true);

    //const {email,password,isSignedUp} = formData;
    const {email,password} = formData;

    useEffect(() => {
        if (!building && authRedirectPath !== '/') {
            setAuthRedirectPath('/');
        }
    },[]);

    const handleChange = event => {
     setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    // const handleSignUp = () => {
    //     setFormData(prevValue => {
    //         return { ...prevValue,
    //                 isSignedUp:!prevValue.isSignedUp}
    //     });
    //     //console.log(isSignedUp);

    // }
    const handleSignUp = () => {
        setIsSignedUp(!isSignedUp);
    }

    const handleSubmit = event => {
        event.preventDefault();
        auth(email,password,isSignedUp);
        //console.log(isSignedUp);
    }
    let errorMessage = null;
    if (error) {
        errorMessage = <p>{error.message}</p>;
    }

    let authRedirect = null;
    if (isAuthenticated) {
        authRedirect = <Redirect to = {authRedirectPath}/>
    }

    return (
        <div className = {classes.Auth}>
        <h4><strong>Please Enter Your Authentication Credentials</strong></h4>
          {authRedirect}
          {errorMessage}
    {loading ? <Spinner /> : (<Fragment> 
        
        <form onSubmit = {handleSubmit}>
            <Input inputtype = "input" 
                 type = "email" 
                 name = "email" 
                 placeholder = "Your E-mail"
                 value = {email} 
                 onChange = {event => handleChange(event)}
                 required />
            <Input inputtype = "input" 
                 type = "password" 
                 name = "password" 
                 placeholder = "Password"
                 value = {password} 
                 onChange = {event => handleChange(event)}
                 required />
            <Button btnType = "Success">SUBMIT</Button>
                 </form>
            <Button clicked = {handleSignUp} btnType = "Danger">Switch To {isSignedUp ? 'SignIn' : 'SIGNUP'}</Button>
                </Fragment>)} 
             </div>
        
    );
}

Auth.propTypes = {
   auth:PropTypes.func.isRequired,
   error:PropTypes.string,
   loading:PropTypes.bool.isRequired,
   isAuthenticated: PropTypes.bool.isRequired,
   building:PropTypes.bool.isRequired,
   setAuthRedirectPath:PropTypes.func.isRequired,
   authRedirectPath:PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    isAuthenticated: state.authReducer.token !== null,
    building:state.burgerBuilderReducer.building,
    authRedirectPath:state.authReducer.authRedirectPath
});

export default connect(mapStateToProps, { auth, setAuthRedirectPath})(Auth);

