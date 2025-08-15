import AuthPage from "./components/AuthPage.jsx"
import { ToastProvider } from "./components/ToastProvider.jsx"
import "./App.css"

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <AuthPage />
      </div>
    </ToastProvider>
  )
}

export default App
