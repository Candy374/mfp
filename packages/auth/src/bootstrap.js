import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {createMemoryHistory, createBrowserHistory} from 'history'
const mount = (el, {onNavigate, defaultHistory, initialPath, onSignIn}) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath]
    })
  if (onNavigate) {
    history.listen(onNavigate)
  }

  ReactDom.render(<App history={history} onSignIn={onSignIn} />, el)

  return {
    onParentNavigate({pathname: nextPathname}) {
      if (history.location.pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth_dev-root')

  if (devRoot) {
    mount(devRoot, {defaultHistory: createBrowserHistory()})
  }
}

export {mount}
