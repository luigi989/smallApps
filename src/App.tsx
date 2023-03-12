import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { NavLink, Outlet } from "react-router-dom";
import './App.css'
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="h-full bg-slate-700 flex">
      <Drawer>
        <NavLink to="/bin2Dec" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Bin2Dec</NavLink> <br />
        <NavLink to="/borderRadiousPreviewer" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Border radious previewer</NavLink> <br />
        <NavLink to="/calc" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Calculator</NavLink>
      </Drawer>
      <Outlet />
    </div>
  )
}

export default App
