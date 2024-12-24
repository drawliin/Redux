import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../features/user'

function Login() {

  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()

  return (
    <div>
        {!user.name ? (
          <button onClick={() => {dispatch(login( {name: 'Houssam', age: 20, email: 'itshoussameddine@gmail.com'}))}}>
            Login
          </button>
        ) : (
          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        )}
    </div>
  )
}

export default Login