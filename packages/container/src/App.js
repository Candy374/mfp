// must consist with useStyles, both should import from '@material-ui/core' or '@material-ui/core/styles'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'
import React, {Suspense, useEffect, useState} from 'react'
import {Route, Switch, Router, Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
const AuthApp = React.lazy(() => import('./components/AuthApp'))
const MarketingApp = React.lazy(() => import('./components/MarketingApp'))
const DashboardApp = React.lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const history = createBrowserHistory()
export default () => {
  const [isSignedIn, setIsSingedIn] = useState(false)
  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSingedIn(false)} />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path='/auth' component={AuthApp}>
              <AuthApp onSignIn={() => setIsSingedIn(true)} />
            </Route>
            <Route path='/dashboard'>
              {!isSignedIn && <Redirect to='/' />}
              <DashboardApp />
            </Route>
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  )
}
