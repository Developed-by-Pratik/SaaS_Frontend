"use client"

import SignInUpForm from "./SignInUpForm";
import ResetPasswordForm from "./ResetPasswordForm";
import "./AuthPage.css";

const AuthPage = ({ type }) => {
  return (
    <div className="auth-container">
      <div className="background-blur blur-1"></div>
      <div className="background-blur blur-2"></div>
      <div className="background-blur blur-3"></div>
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">
            {type === "reset" ? "RESET PASSWORD" : "LOGIN / SIGN UP"}
          </h1>
        </div>
        {type === "reset" ? <ResetPasswordForm /> : <SignInUpForm />}
      </div>
    </div>
  );
};

export default AuthPage;
