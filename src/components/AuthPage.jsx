import SignInUpForm from "./SignInUpForm";
import ResetPassword from "./ResetPassword";
import "./AuthPage.css";

const AuthPage = ({ type }) => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">
            {type === "reset" ? "RESET PASSWORD" : "LOGIN / SIGN UP"}
          </h1>
        </div>
        {type === "reset" ? <ResetPassword /> : <SignInUpForm />}
      </div>
    </div>
  );
};

export default AuthPage;
