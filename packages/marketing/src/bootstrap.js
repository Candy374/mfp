import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const mount = el => {
  ReactDom.render(<App />, el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing_dev-root')
  if (devRoot) {
    mount(devRoot)
  }
}

export {mount}
