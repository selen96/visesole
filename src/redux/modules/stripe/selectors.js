import { get } from 'lodash'

export const stripeQuantitySelector = (state) =>
  get(state, 'stripe.quantity', null)

export const stripeStatusSelector = (state) =>
  get(state, 'stripe.status')
