import AuthPage from "./components/AuthPage.jsx";
import Home from "./pages/Home.jsx";
import SetNewPasswordForm from "./components/SetNewPasswordForm.jsx";
import { useSearchParams } from "react-router-dom";
import { ToastProvider } from "./components/ToastProvider.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import "./App.css";

function ResetPasswordRoute() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const oobCode = params.get("oobCode"); // Firebase param
  if (oobCode) {
    return <SetNewPasswordForm token={oobCode} />;
  }
  return <AuthPage type="reset" />;
}

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/reset-password" element={<ResetPasswordRoute />} />
            <Route path="/reset-password/:token" element={<SetNewPasswordForm />} />
            <Route path="/auth" element={<AuthPage type="auth" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<AuthPage type="auth" />} />
          </Routes>
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;
