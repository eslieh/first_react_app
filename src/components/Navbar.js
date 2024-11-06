import { NavLink } from "react-router-dom";

 function Navbar() {
  return (
    <div>
        <NavLink 
            to={'/'}
            className = "nav-link"
        >
            Home
        </NavLink>
        <NavLink 
            to={'/Users'}
            className = "nav-link"
        >
            Users
        </NavLink>
    </div>
  )
}
export default Navbar;