import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {
  const [error, setError] = useState()
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Failed to logout')
    }
  }
  return (
    <div>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gray-50 p-8 sm:p-12">
        <div className="text-6xl">Dash</div>
        <div className="text-2xl">{error && <div>{error}</div>}</div>
        <div className="1xl">{currentUser.email}</div>
        <div>
          <Link className='w-1/8 mb-1 inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition' to="/update-profile">Update Profile</Link>
        </div>
        <button
          className="w-1/8 inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}
