import AuthPage from "./components/AuthPage.jsx";
import Home from "./pages/Home.jsx";
import "./App.css";

import { useState, useEffect } from "react";
import { ToastProvider } from "./components/ToastProvider.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";

import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import NewPassword from "./components/NewPassword.jsx";

function ResetPasswordRoute() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const oobCode = params.get("oobCode");
  if (oobCode) {
    return <NewPassword token={oobCode} />;
  }
  return <AuthPage type="reset" />;
}

function App() {

  const [authToken, setAuthToken] = useState(localStorage.getItem('token')); 

  useEffect(() => {
    const handleStorage = () => {
      setAuthToken(localStorage.getItem('token'));
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>

            <Route path="/*" element={<Navigate to="/auth" />}/>
            <Route path="/auth" element={<AuthPage type="auth" />} />
            <Route path="/reset-password" element={<ResetPasswordRoute />} />
            <Route path="/reset-password/:token" element={<NewPassword />} />

            <Route element={<ProtectedRoutes token={authToken}/>}>
              <Route path="/home" element={<Home />} />
            </Route>
          
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
