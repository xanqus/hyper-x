import React from 'react'
import { Route } from 'react-router-dom'
import Users from '../Users'

const AuthRoute = ({ component, render, ...rest }) => {
  console.log('component', component)
  console.log('render', render)
  console.log('rest', { ...rest })
  return <div>인증됨</div>
}
export default AuthRoute
