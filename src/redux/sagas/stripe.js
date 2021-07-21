import { takeLatest } from 'redux-saga/effects'
import * as CONSTANTS from 'redux/modules/stripe/constants'
import apiCall from '../api/apiCall'

const doCheckStripeQuantity = apiCall({
  type: CONSTANTS.CHECK_STRIPE_QUANTITY,
  method: 'post',
  path: 'stripe/retrieve-sku',
})

const doUpdateStripeQuantity = apiCall({
  type: CONSTANTS.UPDATE_STRIPE_QUANTITY,
  method: 'get',
  path: 'stripe/update-quantity',
})

const doVerifyUserPay = apiCall({
  type: CONSTANTS.VERIFY_USER_PAY,
  method: 'post',
  path: 'stripe/verify-pay',
})

export default function* rootSaga () {
  yield takeLatest(CONSTANTS.CHECK_STRIPE_QUANTITY, doCheckStripeQuantity)
  yield takeLatest(CONSTANTS.UPDATE_STRIPE_QUANTITY, doUpdateStripeQuantity)
  yield takeLatest(CONSTANTS.VERIFY_USER_PAY, doVerifyUserPay)
}
