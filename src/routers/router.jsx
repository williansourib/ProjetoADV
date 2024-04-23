import {createBrowserRouter, Router, RouterProvider} from "react-router-dom"
import Home from '../pages/Home.jsx';
import Cadastro from '../pages/Cadastro.jsx'
import Lista from '../pages/Lista.jsx'
import PaginaErro from '../pages/PaginaErro.jsx'
import App from '../App.jsx'


const routers = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Home /> 
      },
      {
        path: "/cadastro",
        element: <Cadastro />
      },
      {
        path: "/lista",
        element: <Lista />
      },
    ]
  },  
 
])

export default routers