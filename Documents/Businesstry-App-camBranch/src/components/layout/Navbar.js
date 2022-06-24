import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

function Navbar() {
    const { currentUser } = useAuth()
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-slate-900 sm:flex sm:justify-between">
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900">
        <div className=" text-2xl text-white">Businesstry</div>
        <div>
          <div
            onClick={() => setOpen(!open)}
            className=" p-1 w-8 h-8 sm:hidden"
          >
            {open ? (
              <svg>
                <path
                  fill-rule="evenodd"
                  className="fill-white"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
              </svg>
            ) : (
              <svg className="color-white">
                <path
                  fill-rule="evenodd"
                  className="fill-white"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className={` rounded-lg p-4  ${open ? 'block' : 'hidden'} sm:flex `}>
   
       
        { !currentUser ?   <Link
          className="block flex rounded px-4 py-4 text-white hover:bg-blue-500 hover:text-white no-underline "
          to="/login"
        >
          Login
        </Link> 
        : <Redirect to="/"/>       
}
        { currentUser ?   
        <>
        <Link
          className="block flex rounded px-4 py-4 text-white hover:bg-blue-500 hover:text-white no-underline "
          to="/"
          >
          Dashboard
        </Link> 
        <Link
          className="block flex rounded px-4 py-4 text-white hover:bg-blue-500 hover:text-white no-underline "
          to="/signup"
          >
          Register
        </Link> 
          </>
        : <Redirect to="/login"/>       
}

      </div>
    </header>
  )
}

export default Navbar
