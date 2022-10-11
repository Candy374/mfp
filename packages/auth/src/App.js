// must consist with useStyles, both should import from '@material-ui/core' or '@material-ui/core/styles'
import {createGenerateClassName, StylesProvider} from '@material-ui/core'
import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

export default ({history, onSignIn}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path='/auth/signin'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  )
}
