// must consist with useStyles, both should import from '@material-ui/core' or '@material-ui/core/styles'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'
import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default ({history}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path='/pricing' component={Pricing} />
          <Route path='/' component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  )
}
