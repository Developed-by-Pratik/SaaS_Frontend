


import AuthPage from "./components/AuthPage.jsx";
import Home from "./pages/Home.jsx";
import { ToastProvider } from "./components/ToastProvider.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <ToastProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/reset-password" element={<AuthPage type="reset" />} />
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
