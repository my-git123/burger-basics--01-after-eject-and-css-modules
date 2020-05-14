import { AUTH_SUCCESS,
         AUTH_FAIL, 
         AUTH_START,
         AUTH_REDIRECT_PATH,
         AUTH_LOGOUT } from '../actions/types';

const initialState = ({
    token:null,
    userId:null,
    error:null,
    authRedirectPath:'/',
    loading:false
});

export default function (state = initialState, action) {
  const { type,payload} = action;

  switch (type) {
      case AUTH_START:
          return {
              ...state,
              loading:true,
              error:null
          }
      case AUTH_SUCCESS: 
          return {
              ...state,
              token:payload.idToken,
              userId:payload.localId,
              loading:false,
              error:null
          }
     case AUTH_FAIL:
         return {
             ...state,
             loading:false,
             error: payload.error
         }
    case AUTH_LOGOUT:
        return {
            ...state,
            token:null,
            userId:null
        }
    case AUTH_REDIRECT_PATH:
        return {
            ...state,
            authRedirectPath:payload
        }
           
    default:
          return state;
  }
}