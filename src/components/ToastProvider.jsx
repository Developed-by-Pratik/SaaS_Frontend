"use client"

import { createContext, useContext, useState } from "react"
import Toast from "./Toast"

const ToastContext = createContext()

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const MAX_TOASTS = 3

const showToast = (message, type = "info", duration = 4000) => {
  const id = crypto.randomUUID()
  const createdAt = Date.now()
  const newToast = { id, message, type, duration, createdAt }

  setToasts((prev) => {
    const updated = [newToast, ...prev] // new toast at top
    if (updated.length > MAX_TOASTS) {
      updated.pop() // remove last one
    }
    return updated
  })
}


  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration + index * 200} // stagger vanish
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}
