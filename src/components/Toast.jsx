"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle, AlertCircle, Info } from "lucide-react"
import "./Toast.css"

const Toast = ({ message, type = "info", duration = 4000, onClose }) => {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, duration - 500)

    const removeTimer = setTimeout(() => {
      onClose()
    }, duration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [duration, onClose])

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle size={20} />
      case "error":
        return <AlertCircle size={20} />
      default:
        return <Info size={20} />
    }
  }

  return (
    <div className={`toast toast-${type} ${fadeOut ? "fade-out" : ""}`}>
      <div className="toast-content">
        <div className="toast-icon">{getIcon()}</div>
        <span className="toast-message">{message}</span>
        <button
          onClick={() => {
            setFadeOut(true)
            setTimeout(onClose, 500)
          }}
          className="toast-close"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

export default Toast
