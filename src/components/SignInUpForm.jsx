import React from "react";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { useToast } from "./ToastProvider";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

const SignInUpForm = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFormData({ email: "", password: "", name: "", confirmPassword: "" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    setLoading(true);
    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };
      const response = await fetch(`http://localhost:8080${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (response.ok) {
        if (isLogin) {
          localStorage.setItem("token", data.token);
          showToast("Login successful!", "success");
          navigate("/home");
        } else {
          showToast("Signup successful! Please login.", "success");
          setIsLogin(true);
          resetForm();
        }
      } else {
        showToast(data.message || "Authentication failed", "error");
      }
    } catch (error) {
      console.error("Auth error:", error);
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    showToast("Google authentication is not implemented yet.", "info");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <div className="input-group">
            <div className="input-wrapper">
              <User className="input-icon" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                className="auth-input"
                required
              />
            </div>
          </div>
        )}
        <div className="input-group">
          <div className="input-wrapper">
            <Mail className="input-icon" size={20} />
            <input
              type="email"
              name="email"
              placeholder={isLogin ? "Username or Email" : "Email Address"}
              value={formData.email}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-wrapper">
            <Lock className="input-icon" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="auth-input"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        {!isLogin && (
          <div className="input-group">
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="auth-input"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="password-toggle"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        )}
        <button type="submit" className="auth-button" disabled={loading}>
          {loading ? "Please wait..." : isLogin ? "SIGN IN" : "CREATE ACCOUNT"}
        </button>
        {isLogin && (
          <button
            type="button"
            onClick={() => window.location.href = "/reset-password"}
            className="forgot-password"
          >
            Forgot password? Click here
          </button>
        )}
      </form>
      <div className="divider"><span>or</span></div>
      <button onClick={handleGoogleAuth} className="google-button">
        <svg className="google-icon" viewBox="0 0 24 24" width="20" height="20">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
        Continue with Google
      </button>
      <div className="auth-switch">
        {isLogin ? (
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={() => { setIsLogin(false); resetForm(); }} className="switch-button">
              Sign up
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button type="button" onClick={() => { setIsLogin(true); resetForm(); }} className="switch-button">
              Sign in
            </button>
          </p>
        )}
      </div>
    </>
  );
};

export default SignInUpForm;
