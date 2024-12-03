import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container pt-5">
        <h2>Add New Employee</h2>
        <p>All Employees / Add New Employee</p>
        <nav className="nav-wrapper my-5">
          <ul className="list-unstyled d-flex flex-wrap gap-3 gap-md-4">
            <li>
              <NavLink to="/admin-dashboard/employees/personal-info" end>
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} pb-3`}>
                    Personal Information
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/employees/personal-info/professional">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} pb-3`}>
                    Professional
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/employees/personal-info/salary">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} pb-3`}>
                    Salary
                  </span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin-dashboard/employees/personal-info/user-account">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} pb-3`}>
                    User Account
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
