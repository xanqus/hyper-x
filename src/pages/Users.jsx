import React, { useEffect } from 'react'
import ApiInterceptor from '../utils/ApiInterceptor'

const Users = () => {
  useEffect(() => {
    const getUsers = async () => {
      const data = await ApiInterceptor({ url: '/api/v1/user', method: 'GET' })

      console.log('userdata', data)
    }
    getUsers()
  }, [])
  return <h2>Users</h2>
}

export default Users
