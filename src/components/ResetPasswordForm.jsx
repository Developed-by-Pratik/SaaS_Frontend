import { useState } from "react";
import { Mail } from "lucide-react";
import { useToast } from "./ToastProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import "./AuthPage.css";

const ResetPasswordForm = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const email = formData.email;
      await sendPasswordResetEmail(auth, email);
      showToast("Password reset email sent!", "success");
    } catch (error) {
      console.error("Forgot password error:", error);
      showToast("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleForgotPasswordSubmit} className="auth-form">
      <div className="input-group">
        <div className="input-wrapper">
          <Mail className="input-icon" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            className="auth-input"
            required
          />
        </div>
      </div>
      <button type="submit" className="auth-button" disabled={loading}>
        {loading ? "Please wait..." : "SEND RESET LINK"}
      </button>
    </form>
  );
};

export default ResetPasswordForm;
