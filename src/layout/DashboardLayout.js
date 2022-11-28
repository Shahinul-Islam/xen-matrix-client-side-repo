import React, { useContext, useEffect, useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const [loggedUser, setLoggedUser] = useState([]);
  const userNow = loggedUser[0];
  // console.log(userNow);
  useEffect(() => {
    const url = `http://localhost:5000/user?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLoggedUser(data));
  }, []);
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="dashboard"
            className="btn-sm p-2 btn-primary drawer-button lg:hidden"
          >
            Open
          </label>
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {userNow && userNow.role === "Admin" ? (
              <>
                <li>
                  <Link to="/dashboard/all-sellers">All Sellers</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-buyers">All Buyers</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {userNow && userNow.role === "Buyer" ? (
              <>
                <li>
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {userNow && userNow.role === "Seller" ? (
              <>
                <li>
                  <Link to="/dashboard/my-products">My Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/my-buyers">My Buyers</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-product">Add a Product</Link>
                </li>
              </>
            ) : (
              <></>
            )}
            {/* 
            <li>
              <Link>Sidebar Item 2</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
