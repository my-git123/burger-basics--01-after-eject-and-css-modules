import axios from 'axios';
import { AUTH_SUCCESS,
         AUTH_FAIL,
         AUTH_START,
         AUTH_REDIRECT_PATH,
         AUTH_LOGOUT} from './types';

//Begin auth for loading
export const authStart = () => {
    return {
      type:AUTH_START
    }
}
//check token timeout
export const checkAuthTimeout = (expirationTime) => dispatch => {
    console.log('boooooooo');
    setTimeout(() => {
        dispatch({
            type:AUTH_LOGOUT
        });
        console.log('oooooooooo');
    },expirationTime*1000);  
}
//Auth Logout
export const authLogout = () => dispatch => {
    dispatch ({
         type: AUTH_LOGOUT
    });
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
  
}
//auth fail
// export const authFail = (error) => {
//     return {
//         type:AUTH_FAIL,
//         payload: error
//     };
// }
//auth process
export const auth = (email,password,isSignedUp) => async dispatch => {
    dispatch(authStart());
    const config = {
        email: email,
        password:password,
        returnSecureToken:true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6Xdsftrnks81kwwuFm1DQ7tibpW_x5RY';
        if (!isSignedUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA6Xdsftrnks81kwwuFm1DQ7tibpW_x5RY';
        }
    
    try {
        const res = await axios.post(url, config);
        const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
        localStorage.setItem('token',res.data.idToken);
        localStorage.setItem('expirationDate',expirationDate);
        localStorage.setItem('userId',res.data.localId);
        
        dispatch({
            type:AUTH_SUCCESS,
            payload:res.data
        });
        console.log(res.data);
        
        dispatch(checkAuthTimeout(res.data.expiresIn));
        } catch (error) {
          dispatch({type: AUTH_FAIL,
                    payload: error
                });           
          console.log('dispatch auth fail');
    }
     
}
//Auth redirect path
export const setAuthRedirectPath = (path) => dispatch => {
    dispatch({
        type: AUTH_REDIRECT_PATH,
        payload:path
    });
}
//check user auto loaded
export const userAutoLoaded = () => dispatch => {
    const idToken = localStorage.getItem('token');
 if(!idToken) {
    dispatch(authLogout());
 } else {
     console.log(idToken);
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
                dispatch(authLogout());
            } else {
                const localId = localStorage.getItem('userId');
                console.log(localId);
                  dispatch({
                     type:AUTH_SUCCESS,
                     payload:{idToken,localId}
                   });
                   dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000));
                   //dispatch(checkAuthTimeout(1000)); 
            } 
 }

}
