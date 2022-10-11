// must consist with useStyles, both should import from '@material-ui/core' or '@material-ui/core/styles'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'
import React, {Suspense} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
const AuthApp = React.lazy(() => import('./components/AuthApp'))
const MarketingApp = React.lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  )
}
