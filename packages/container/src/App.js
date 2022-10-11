// must consist with useStyles, both should import from '@material-ui/core' or '@material-ui/core/styles'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'
import React, {Suspense, useState} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
const AuthApp = React.lazy(() => import('./components/AuthApp'))
const MarketingApp = React.lazy(() => import('./components/MarketingApp'))
const DashboardApp = React.lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  const [isSignedIn, setIsSingedIn] = useState(false)

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header signedIn={isSignedIn} onSignOut={() => setIsSingedIn(false)} />
        <Suspense fallback={<ProgressBar />}>
          <Switch>
            <Route path='/auth' component={AuthApp}>
              <AuthApp onSignIn={() => setIsSingedIn(true)} />
            </Route>
            <Route path='/dashboard' component={DashboardApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  )
}
