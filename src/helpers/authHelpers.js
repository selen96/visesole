import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'
import { DO_SIGNUP } from 'redux/modules/auth/constants'
import { requestPending } from 'redux/api/request'
import { Loader } from 'components/Loader'
import { DISCORD_AUTH_URL } from 'helpers/utils'

const locationHelper = locationHelperBuilder({})

export const isLoggingIn = state => requestPending(DO_SIGNUP) === state.auth.status

const userIsAuthenticatedDefaults = {
  authenticatedSelector: state => state.auth.me !== null,
  wrapperDisplayName: 'UserIsAuthenticated'
}

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults)

export const userIsAuthenticatedRedir = connectedRouterRedirect({
  ...userIsAuthenticatedDefaults,
  AuthenticatingComponent: Loader,
  redirectPath: state => state.auth.me ? '' : window.location.replace(DISCORD_AUTH_URL)||''
})

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: state => state.auth.me === null && !isLoggingIn(state),
  wrapperDisplayName: 'UserIsNotAuthenticated'
}

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults)

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
  ...userIsNotAuthenticatedDefaults,
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  allowRedirectBack: false
})

const licenseIsVerified = {
  authenticatedSelector: state => state.auth.isLicenseVerified,
  wrapperDisplayName: 'licenseIsVerified'
}

export const isLicenseVerified = connectedAuthWrapper(licenseIsVerified)

export const isLicenseVerifiedRedir = connectedRouterRedirect({
  ...licenseIsVerified,
  redirectPath: state => state.auth.isLicenseVerified ? '' : '/dashboard',
})
