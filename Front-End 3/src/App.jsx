import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"


//import { SegundaAula } from './aulas/SegundaAula'
//import { TerceiraAula } from './Aulas/TerceiraAula'
//import { QuartaAula } from './Aulas/QuartaAula'
//import { QuintaAula } from './Aulas/QuintaAula'
//import { SetimaAula } from './lessons/SetimaAula'
import { DecimaTerceiraAula } from "./lessons/DecimaTerceiraAula"
import { DecimaQuintaAula } from "./lessons/DecimaQuintaAula"
import { LorettoStore } from './pages/LorettoStore'
import { MainLayout } from "./components/MainLayout"
//import { Login } from './pages/Login'

function App() { //rotas

  const appRouter = createBrowserRouter([

    {
      path: '', //ROTA: http://127.0.0.1:5173/aula15
      element: <MainLayout />,
      children: [
        {
          path: 'aula15/:id', //ROTA: http://127.0.0.1:5173/aula15
          element: <DecimaQuintaAula />
        },
        {
          path: 'aula13/:id',//ROTA: http://127.0.0.1:5173/aula13
          element: <DecimaTerceiraAula />
        },
        {
          path: 'store/:id',//ROTA: http://127.0.0.1:5173/store
          element: <LorettoStore />
        }
      ]
    }
  ])

  return (

    <RouterProvider router={appRouter} />

  )

}

export default App