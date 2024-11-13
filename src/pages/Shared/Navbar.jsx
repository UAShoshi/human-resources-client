import { Link, NavLink } from "react-router-dom";
import profile from "../../assets/Navbar/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogout = () => {
    logOut()
      .then()
      .catch()
  }

  const navOption = <>
        <li><NavLink to='/'>Home</NavLink></li>
        {/* <li><NavLink to='/secret'>Secret</NavLink></li> */}
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>

        {
      user? <>
        <span>{user?.displayName}</span>
        <li className="border-0 bg-black text-white rounded-md ml-3" onClick={handleLogout}><NavLink to='/login'>Logout</NavLink></li>
        </> : <li className="border-0 bg-black text-white rounded-md ml-3"><NavLink to='/login'>login</NavLink></li>
    }
  </>
  return (
    <div>
      <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-20 font-bold">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navOption}
        </ul>
    </div>
    <Link><a className="btn btn-ghost text-xl font-bold">Human Resources</a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end avatar">
  <div className="w-9 rounded-full">
    <img src={profile} />
  </div>
</div>
</div>
    </div>
  );
};

export default Navbar;