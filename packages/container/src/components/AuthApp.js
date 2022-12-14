import {mount} from 'auth/AuthApp'
import React, {useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

export default function AuthApp({onSignIn}) {
  const ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: ({pathname: nextPathname}) => {
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      initialPath: history.location.pathname,
      onSignIn
    })

    history.listen(onParentNavigate)
  }, [])

  return <div ref={ref} />
}
