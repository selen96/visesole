import { get } from 'lodash'

export const globalStateSelector = (state) =>
  get(state, 'global')

export const globalStatusSelector = (state) =>
  get(state, 'global.status')

export const passwordCheckStatusSelector = (state) =>
  get(state, 'global.isPasswordMartched', null)
