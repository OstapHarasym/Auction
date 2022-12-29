import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from '../pages/Catalogue/Catalogue';
import Navbar from './Navbar';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/catalogue' element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>
  )
}