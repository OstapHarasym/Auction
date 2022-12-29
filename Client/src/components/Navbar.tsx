import {NavLink} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='bg-red-300 p-3 space-x-10'>
      <NavLink to='/catalogue'>Catalogue</NavLink>
      <NavLink to='/create-lot'>New lot</NavLink>
    </div>
  )
}
