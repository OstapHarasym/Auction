import {BrowserRouter, Navigate} from 'react-router-dom';
import Catalogue from '../features/catalogue/components/Catalogue';
import Navbar from '../features/header/components/Navbar';
import CreateLotForm from '../features/lotCreation/components/CreateLotForm';
import Lot from '../features/lot/components/Lot';
import {Login, Register} from '../features/authentication';
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