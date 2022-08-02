import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import Login from '../Login'
import { authenticatedState } from '../recoil/store'

const AuthRoutes = () => {
  const location = useLocation()
  const [authenticated] = useRecoilValue(authenticatedState)
  console.log('location', location)
  return authenticated ? <Outlet /> : <Login to={location.pathname} />
}
export default AuthRoutes
