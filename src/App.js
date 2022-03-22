import './App.css';
import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <div className="sidenav">
        <NavLink to="/bin2Dec" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Bin2Dec</NavLink> <br />
        <NavLink to="/borderRadiousPreviewer" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Border radious previewer</NavLink> <br />
        <NavLink to="/calc" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Calculator</NavLink>
      </div>
      <Outlet />
    </div>
  );
}