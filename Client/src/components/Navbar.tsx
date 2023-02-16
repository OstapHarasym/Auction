import {NavLink} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Navbar() {
  const [isAuthorized] = useAuth()

  function logout() {
    localStorage.removeItem('token')
  }

  return (
    <div className='bg-red-300 p-3 space-x-10'>
      <NavLink to='/catalogue'>Catalogue</NavLink>
      <NavLink to='/create-lot'>New lot</NavLink>
      {
        isAuthorized
          ? <button onClick={() => localStorage.removeItem('token')}>Log out</button>
          : <NavLink to='/login'>Log in</NavLink>
      }
    </div>
  )
}
