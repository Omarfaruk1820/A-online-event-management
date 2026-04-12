import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  // If user logged in allow access
  if (user) {
    return children;
  }

  // If not logged in redirect to login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
