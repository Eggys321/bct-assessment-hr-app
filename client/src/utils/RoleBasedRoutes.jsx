import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate,useNavigate,useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const RoleBasedRoutes = ({ children, requiredRole }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();  
  const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (!requiredRole.includes(user.role)) {
    const previousLocation = location.state?.from || '/auth/sign-in';
      navigate(previousLocation);
      return;
  }
  return user ? children : <Navigate to="/auth/sign-in"/>
};

export default RoleBasedRoutes;
