import {BrowserRouter, Navigate, Routes,} from 'react-router-dom';
import Catalogue from '../pages/Catalogue/Catalogue';
import Navbar from './Navbar';
import CreateLotForm from '../pages/CreateLot/CreateLotForm';
import Lot from '../pages/Lot/Lot';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import Route from './Route';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Route path='/login' element={<Login/>} auth={false}/>
        <Route path='/register' element={<Register/>} auth={false}/>

        <Route path='' element={<Navigate to='/catalogue'/>} auth={false}/>
        <Route path='/catalogue' element={<Catalogue/>} auth={false}/>
        <Route path='/create-lot' element={<CreateLotForm/>} auth={false}/>
        <Route path='/lots/:id' element={<Lot/>} auth={false}/>
    </BrowserRouter>
  )
}