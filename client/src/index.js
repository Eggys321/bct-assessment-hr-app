import { lazy } from "react";

const SignIn = lazy(() => import("./auth/SignIn"));
const ForgotPassword = lazy(() => import("./auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./auth/ResetPassword"));
const AdminDashboard = lazy(() => import("./layout/AdminDashboard"));
const AdminSummary = lazy(() => import("./componenets/AdminSummary"));
const Employees = lazy(() => import("./pages/admin-dashboard/Employees"));
const Settings = lazy(() => import("./pages/admin-dashboard/Settings"));
const Error = lazy(() => import("./pages/Error"));
const AllEmployees = lazy(() => import("./pages/admin-dashboard/AllEmployees"));
const NewEmployee = lazy(() => import("./pages/admin-dashboard/NewEmployee"));
const PersonalInfo = lazy(() => import("./pages/admin-dashboard/PersonalInfo"));
const Salary = lazy(() => import("./pages/admin-dashboard/Salary"));
const Professional = lazy(() => import("./pages/admin-dashboard/Professional"));
const UserAccount = lazy(() => import("./pages/admin-dashboard/UserAccount"));
const EmployeeDashboard = lazy(() => import("./layout/EmployeeDashboard"));
const EmployeeTaskBoard = lazy(() => import("./pages/employee-dashboard/EmployeeTaskBoard"));
const EmployeeSettings = lazy(() => import("./pages/employee-dashboard/EmployeeSettings"));
const EmployeeSummary = lazy(() => import("./componenets/employee-component/EmployeeSummary"));



export {
    SignIn,
    ForgotPassword,
    ResetPassword,
    AdminDashboard,
    AdminSummary,
    Employees,
    Settings,
    Error,
    AllEmployees,
    NewEmployee,
    PersonalInfo,
    Salary,
    Professional,
    UserAccount,
    EmployeeDashboard,
    EmployeeTaskBoard,
    EmployeeSettings,
    EmployeeSummary
  };