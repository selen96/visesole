import { combineReducers } from 'redux'

import global from './modules/global/reducers'
import auth from './modules/auth/reducers'
import stripe from './modules/stripe/reducers'

export default combineReducers({
  global,
  auth,
  stripe
})
