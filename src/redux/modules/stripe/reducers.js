import { handleActions } from 'redux-actions'
import { requestSuccess, requestFail } from 'redux/api/request'
import * as CONSTANTS from './constants'

const getInitialState = () => {
  return {
    quantity: null,
    status: 'INIT',
    error: null,
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CONSTANTS.CHECK_STRIPE_QUANTITY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [CONSTANTS.UPDATE_STRIPE_QUANTITY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [CONSTANTS.VERIFY_USER_PAY]: (state, { payload }) => ({
    ...state,
    status: 'PENDING',
  }),

  [requestSuccess(CONSTANTS.CHECK_STRIPE_QUANTITY)]: (state, { payload }) => ({
    ...state,
    quantity: payload.inventory.quantity,
    status: requestSuccess(CONSTANTS.CHECK_STRIPE_QUANTITY),
    error: null
  }),

  [requestFail(CONSTANTS.CHECK_STRIPE_QUANTITY)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.CHECK_STRIPE_QUANTITY),
    error: payload
  }),

  [requestSuccess(CONSTANTS.UPDATE_STRIPE_QUANTITY)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.UPDATE_STRIPE_QUANTITY),
    error: null
  }),

  [requestFail(CONSTANTS.UPDATE_STRIPE_QUANTITY)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.UPDATE_STRIPE_QUANTITY),
    error: payload
  }),

  [requestSuccess(CONSTANTS.VERIFY_USER_PAY)]: (state, { payload }) => ({
    ...state,
    status: requestSuccess(CONSTANTS.VERIFY_USER_PAY),
    error: null
  }),

  [requestFail(CONSTANTS.VERIFY_USER_PAY)]: (state, { payload }) => ({
    ...state,
    status: requestFail(CONSTANTS.VERIFY_USER_PAY),
    error: payload
  }),

}, getInitialState())
