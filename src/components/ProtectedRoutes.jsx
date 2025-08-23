import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes({ token }) {
  const isAuthenticated = !!token;
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/auth" />
  )
}

export default ProtectedRoutes;