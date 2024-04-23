
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import {UsuariosContextProvider} from "./context/UsuariosContext"

function App() {
  return (
  <UsuariosContextProvider>
    <Navbar />
     
    <Outlet />



    <footer>
      Created By Willian Ribeiro
    </footer>
  </UsuariosContextProvider>  
    
 
  
  )
}

export default App
