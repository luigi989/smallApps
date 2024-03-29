import { NavLink, Outlet } from "react-router-dom";
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="h-full bg-dbg flex">
      <Drawer>
        <NavLink to="/bin2Dec" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Bin2Dec</NavLink> <br />
        <NavLink to="/borderRadiousPreviewer" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Border radious previewer</NavLink> <br />
        <NavLink to="/calc" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Calculator</NavLink> <br />
        <NavLink to="/christmasLights" className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Christmas lights</NavLink> <br />
        <NavLink to='/causeEffect' className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Cause Effect</NavLink> <br />
        <NavLink to='countdownTimer' className={({ isActive }) => (isActive ? 'linkActive' : 'linkInactive')}>Countdown Timer</NavLink>
      </Drawer>
      <Outlet />
    </div>
  )
}

export default App
