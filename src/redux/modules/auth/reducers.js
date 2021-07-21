import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  let authRestore = JSON.parse(localStorage.getItem('visesole_auth') || null)
  return {
    token: authRestore ? authRestore.tokens.refresh.token : null,
    me: null, // current loged in user,
    isLicenseVerified: false,
    licenseActivation: false,
    licenseKey: null,
    status: 'INIT',
    error: null,
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [requestSuccess(CONSTANTS.DO_LOGIN)]: (state, { payload }) => ({
    ...state,
    token: payload.tokens.refresh.token,
    status: requestSuccess(CONSTANTS.DO_LOGIN),
    me: payload.user
  }),

  [requestFail(CONSTANTS.DO_LOGIN)]: (state, { payload }) => ({
    ...state,
    token: null,
    status: requestFail(CONSTANTS.DO_LOGIN),
    me: null,
    error: payload
  }),

  [requestSuccess(CONSTANTS.DO_SIGNUP_DISCORD)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.DO_SIGNUP_DISCORD),
    token: payload.tokens.refresh.token,
    me: payload.user
  }),

  [CONSTANTS.DO_SIGNUP_DISCORD]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [requestFail(CONSTANTS.DO_SIGNUP_DISCORD)]: (state, { payload }) => ({
    ...state,
    token: null,
    status: requestFail(CONSTANTS.DO_SIGNUP_DISCORD),
    me: null,
    error: payload
  }),
  
  [requestSuccess(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => ({
    ...state,
    token: payload.tokens.refresh.token,
    status: requestSuccess(CONSTANTS.DO_SIGNUP),
    me: payload.user
  }),

  [requestFail(CONSTANTS.DO_SIGNUP)]: (state, { payload }) => ({
    ...state,
    token: null,
    status: requestFail(CONSTANTS.DO_SIGNUP),
    me: null,
    error: payload
  }),

  [CONSTANTS.DO_LOGOUT]: (state, { payload }) => ({
    ...state,
    token: null,
    status: CONSTANTS.DO_LOGOUT,
    me: null,
    error: null
  }),

  [requestSuccess(CONSTANTS.CHECK_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    isLicenseVerified: payload.isMatched,
    licenseActivation: payload.activation,
    status: requestSuccess(CONSTANTS.CHECK_LICENSE_KEY),
  }),

  [CONSTANTS.CHECK_LICENSE_KEY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [requestFail(CONSTANTS.CHECK_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    isLicenseVerified: false,
    licenseActivation: false,
    status: requestFail(CONSTANTS.CHECK_LICENSE_KEY),
  }),

  [CONSTANTS.SAVE_LICENSE_KEY]: (state, { payload }) => ({
    ...state,
    licenseKey: payload
  }),

  [CONSTANTS.UNBIND_LICENSE_KEY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [requestSuccess(CONSTANTS.UNBIND_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.UNBIND_LICENSE_KEY),
  }),

  [requestFail(CONSTANTS.UNBIND_LICENSE_KEY)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.UNBIND_LICENSE_KEY),
  }),

}, getInitialState())
