import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Catalogue from '../pages/Catalogue/Catalogue';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Catalogue/>}/>
      </Routes>
    </BrowserRouter>
  )
}