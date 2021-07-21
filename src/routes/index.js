import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Password from './Password'
import License from './License'
import Home from './Home'
import Terms from './Terms'
import Callback from './Callback'
import { isLicenseVerifiedRedir } from 'helpers/authHelpers'
import 'styles/core.scss'
import 'styles/common.scss'

const routes = () => (
  <Router>
    <div>
      <Route path='/license' component={isLicenseVerifiedRedir(License)} />
      <Route path='/password' component={Password} />
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Home} />
      <Route path='/callback' component={Callback} />
      <Route path='/terms-of-service' component={Terms} />
      {/* <Route component={Home} /> */}
    </div>
  </Router>
)


export default (routes)
