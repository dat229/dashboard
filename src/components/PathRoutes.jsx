import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Customers from '../pages/customers/Customers';
import Dashboard from '../pages/dashboard/Dashboard';

const PathRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/customers' element={<Customers/>} />
    </Routes>
  )
}

export default PathRoutes