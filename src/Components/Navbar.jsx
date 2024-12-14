import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navbar() {

  const links = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">All Job</Link></li>
    <li><Link to="/">Add Job</Link></li>
    <li><Link to="/">My Jobs</Link></li>
    <li><Link to="/">My Applications</Link></li>
  </>

  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">JobPortal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

export default Navbar
