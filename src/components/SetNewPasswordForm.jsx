import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import { useToast } from "./ToastProvider";
import "./AuthPage.css";

const SetNewPasswordForm = () => {
  const { token: paramToken } = useParams();
  const location = useLocation();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Get token from either path param or query string
  const queryToken = React.useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("token");
  }, [location.search]);
  const token = paramToken || queryToken;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      showToast("Invalid or missing token.", "error");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("token", token);
      params.append("newPassword", formData.password);
      const response = await fetch(`http://localhost:8080/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      const text = await response.text();
      if (response.ok) {
        showToast("Password reset successful! Please log in.", "success");
        navigate("/auth");
      } else {
        showToast(text || "Reset failed", "error");
      }
    } catch (error) {
      console.error("Reset error:", error);
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="background-blur blur-1"></div>
      <div className="background-blur blur-2"></div>
      <div className="background-blur blur-3"></div>
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">RESET PASSWORD</h1>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="New Password"
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
          <div className="input-group">
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
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
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Please wait..." : "RESET PASSWORD"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetNewPasswordForm;
