import {BrowserRouter, Navigate} from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Route from './Route';
import React from 'react';
import {Catalogue, CreateLot, Login, Lot, Register} from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Route path='/login' element={<Login/>} auth={false}/>
      <Route path='/register' element={<Register/>} auth={false}/>
      <Route path='/catalogue' element={<Catalogue/>} auth={false}/>
      <Route path='/create-lot' element={<CreateLot/>} auth={false}/>
      <Route path='/lots/:id' element={<Lot/>} auth={false}/>

      <Route path='' element={<Navigate to='/catalogue'/>} auth={false}/>
    </BrowserRouter>
  )
}