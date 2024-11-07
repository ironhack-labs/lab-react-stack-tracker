import { useState } from "react"

import "./App.css"
import Navbar from "./components/Navbar"
import AppRoutes from "./routes/AppRoutes"

import tecnologiesData from './technologies.json'

function App() {

  const [tecnologies, setTecnologies] = useState (tecnologiesData)

  return (
    <div className="App">
      <Navbar />
      <AppRoutes/>

      
    </div>
  )
}

export default App
