import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import { FaHome } from "react-icons/fa";
import { MdContactPhone, MdPayment, MdWork } from "react-icons/md";


const Dashboard = () => {
  // const isAdmin = useAdmin();
  // bg-[#FF902F]

  return (
    <div className="flex">
      <div className="w-52 drawer drawer-content min-h-screen bg-[#FF902F]">
        <ul className="menu bg-[#FF902F] font-bold min-h-full w-70 p-4">
          {
            'isAdmin' ? <>
              {/* Sidebar content here */}
              <li className="mb-5">
                <NavLink to={'/dashboard/workSheet'}>
                  <MdWork></MdWork>
                  Work Sheet</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/paymentHistory'}>
                  <MdPayment></MdPayment>
                  Payment History</NavLink>
              </li>
            </>
              :
              <>
                {/* NavBar Sidebar content here */}
                <li className="mb-5">
                  <NavLink to={'/dashboard/all-employee-list'}>
                    User Home</NavLink>
                </li>
              </>
          }

          <div className="divider"></div>
        <li className="mb-5">
          <NavLink to={'/'}>
          <FaHome></FaHome>
            Home</NavLink>
        </li>
        <li><NavLink to={'/contact'}>
        <MdContactPhone></MdContactPhone>
        Contact us</NavLink></li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;