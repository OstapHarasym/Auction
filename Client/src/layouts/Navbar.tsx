import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import logo from '/hammer.svg';
import {Button} from '../ui/Button';

function showHeader(pathName: string) {
  const hideHeaderRoutes = [
    '/login',
    '/register'
  ]
  return !hideHeaderRoutes.includes(pathName)
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [authorized, setAuthorized] = useState<boolean>()

  useEffect(() => {
    setAuthorized(localStorage.getItem('token') !== null)
  }, [])

  function logout() {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (!showHeader(location.pathname)) {
    return <></>
  }

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <NavLink to="/catalogue" className="flex items-center">
            <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo"/>
            <span className="self-center text-xl font-semibold whitespace-nowrap">Auction</span>
          </NavLink>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink to='/catalogue' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  Catalogue
                </NavLink>
              </li>
              <li>
                <NavLink to='/create-lot' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                  New lot
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:order-2">
            {
              authorized
              ? <Button onClick={() => logout()} colour='red' title='Sign out'/>
              : <>
                  <NavLink to='/login' className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                    Log in
                  </NavLink>
                  <Button onClick={() => navigate('/register')} colour='blue' title='Sign up'/>
                </>
            }
          </div>
        </div>
      </nav>
      <hr/>
    </header>
  )
}
