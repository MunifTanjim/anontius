import { firebaseLogin, firebaseLogout } from '../../utils/firebaseAPI'

import {
  USER_AUTH_LOGIN,
  USER_AUTH_LOGOUT,
  USER_AUTH_UPDATE,
  USER_AUTH_ERROR
} from './actionTypes'

const userAuthRequest = type => ({
  type: type
})

const userAuthError = err => {
  console.error(err)
  return {
    type: USER_AUTH_ERROR
  }
}

export const userAuthUpdate = user => ({
  type: USER_AUTH_UPDATE,
  user
})

export const login = (email, pass) => dispatch => {
  dispatch(userAuthRequest(USER_AUTH_LOGIN))
  return firebaseLogin(email, pass).catch(err => dispatch(userAuthError(err)))
}

export const logout = () => dispatch => {
  dispatch(userAuthRequest(USER_AUTH_LOGOUT))
  return firebaseLogout().catch(err => dispatch(userAuthError(err)))
}
