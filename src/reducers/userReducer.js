import {
  USER_AUTH_LOGIN,
  USER_AUTH_LOGOUT,
  USER_AUTH_UPDATE,
  USER_AUTH_ERROR
} from '../actions/actionTypes'

export const userReducer = (
  state = {
    authenticated: false,
    isProcessing: false,
    uid: null
  },
  action
) => {
  switch (action.type) {
    case USER_AUTH_LOGIN:
    case USER_AUTH_LOGOUT:
      return {
        ...state,
        isProcessing: true
      }
    case USER_AUTH_UPDATE:
      return {
        authenticated: action.user ? true : false,
        isProcessing: false,
        uid: action.user ? action.user.uid : null
      }
    case USER_AUTH_ERROR:
      return {
        ...state,
        isProcessing: false
      }
    default:
      return state
  }
}
