import {StylesProvider} from '@material-ui/core'
import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import MarketingApp from './components/MarketingApp'

export default () => {
  return (
    <div>
      <h1>Hi there</h1>
      <hr />
      <MarketingApp />
    </div>
  )
}
