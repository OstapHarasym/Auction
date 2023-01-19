import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from '../pages/Catalogue/Catalogue';
import Navbar from './Navbar';
import CreateLotForm from '../pages/CreateLot/CreateLotForm';
import Lot from '../pages/Lot/Lot';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/catalogue' element={<Catalogue/>}/>
        <Route path='/create-lot' element={<CreateLotForm/>}/>
        <Route path='/lots/:id' element={<Lot/>}/>
      </Routes>
    </BrowserRouter>
  )
}