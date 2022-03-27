import React from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import { AddNewCar } from '../Pages/AddNewCar/AddNewCar'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Layout } from '../Pages/Layout'
import { ListCar } from '../Pages/ListCar/ListCar'
import { LogIn } from '../Pages/Login/Login'


export const Routers = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='ListCar' element={<ListCar/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='AddNewCar' element={<AddNewCar/> }/>
    </Routes>
    </div>
  )
}
