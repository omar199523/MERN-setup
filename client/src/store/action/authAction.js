import axios from 'axios';
import {returnErrors} from './errorAction'
import {USER_LOADING ,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS ,REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_SUCCESS, LOGIN_FAIL } from './types'
import {push} from 'connected-react-router'



// check token & load user
export const loadUser = ()=> (dispatch,getState)=>{

    // user loading
    dispatch({type:USER_LOADING});
    // requst
    axios.get("/api/auth/user",tokenConfig(getState))
    .then(res =>dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch ((err)=>{
        dispatch(returnErrors( err.response.data , err.response.status))
        dispatch({
            type:AUTH_ERROR,
        })
    })

}

export const register = ({name,email,password}) => (dispatch) =>{
    // Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    // Request body

    const body = JSON.stringify({name,email,password})

    axios.post('/api/user',body,config)
        .then(res =>dispatch([
            dispatch(push('/login')),
            {
            type:REGISTER_SUCCESS,
            payload:res.data
        }
        ]))
        .catch(err=>{
            dispatch(returnErrors( err.response.data , err.response.status,REGISTER_FAIL))
            dispatch({
            type:REGISTER_FAIL,
        })
    })
}
export const logout = ()=>async dispatch =>{
     await dispatch({type: LOGOUT_SUCCESS});
     await dispatch(push('/'))

}

export const login =({email,password})=>dispatch=>{
    // Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }
    // Request body

    const body = JSON.stringify({email,password})

    axios.post('/api/auth',body,config)
        .then(res =>
            [dispatch(
                {
            type:LOGIN_SUCCESS,
            payload:res.data
        }),
        dispatch(push('/mainForm'))
        ])
        .catch(err=>{
            dispatch(returnErrors( err.response.data , err.response.status,LOGIN_FAIL))
            dispatch({
            type:LOGIN_FAIL,
        })})
}
export const tokenConfig = (getState,dispatch)=>{
    // grt token feom localstorge
    const token = getState().auth.token;
    // Headers
    const config = {
        headers:{
            "Content-type":"application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token;
    }
    return config
}
    