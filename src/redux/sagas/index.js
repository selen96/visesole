import { all } from 'redux-saga/effects'
import global from './global'
import auth from './auth'
import stripe from './stripe'

export default function* rootSaga () {
  yield all([
    global(),
    auth(),
    stripe()
  ])
}
