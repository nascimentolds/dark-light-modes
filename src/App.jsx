import { useState } from "react"
import Main from "./components/Main"
import Navbar from "./components/Nav"
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState("")
  
  function toggleDarkMode() {
      setDarkMode(darkMode != "dark" ? "dark" : "")
  }
  
  return (
      <div className="container">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}  />
          <Main darkMode={darkMode} />
      </div>
  )
}
