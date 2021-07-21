import { createAction } from 'redux-actions'
import * as CONSTANTS from './constants'

export const checkStripeQuantity = createAction(CONSTANTS.CHECK_STRIPE_QUANTITY)
export const updateStripeQuantity = createAction(CONSTANTS.UPDATE_STRIPE_QUANTITY)
export const verifyUserPay = createAction(CONSTANTS.VERIFY_USER_PAY)
