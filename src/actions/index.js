import axios from 'axios'
import { AUTH_SIGN_UP, AUTH_ERROR } from './types'

export const oauthGoogle = data => {
    return async dispatch => {
        console.log('we received',data);
        const newData = {
            access_token : data,
            role : "employee",
            method : "google",
            country_id : 1
        }
        const res = await axios.post('http://192.168.0.22:3000/users/oauth/google',newData);
        console.log(newData)
        console.log(res);
    }
}

export const signUp = data => {
    return async dispatch => {
        try {
            console.log('go to AUTH_SIGN_UP in action');
            const res = await axios.post('http://192.168.91.1:3000/users/signUp',data)
            console.log('go to AUTH_SIGN_UP dispatched in action');
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.accessData.accessToken
            })

            localStorage.setItem('JWT_TOKEN',res.data.accessData.accessToken)

        } catch (err) {
            console.log('go to AUTH_ERROR dispatched in action');
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already use'
            })
        }   
    }
}

export const signIn = data => {
    return async dispatch => {
        try {
            const res = await axios.post('http://192.168.0.22:3000/users/signIn',data)
            console.log(res)
        } catch (err) {
            console.log(err)
        }   
    }
}