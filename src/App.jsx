import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from './components/Layout';
import Home from "./Pages/Home";
import Codex from "./Pages/Codex";
import Type from "./Pages/Type";
import NotFound from "./Pages/NotFound";
import Planet from "./Pages/Planet";
import Arsenal from "./Pages/Arsenal";
import Card_films from "./Pages/Card_films";
import ArsenalCardDetail from "./Pages/ArsenalDetail";


export default function App(){
  const router = createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
      {index: true,element: <Home/>},
      {path:'codex' , element:<Codex/>},
      {path:'type' , element:<Type/>},
      {path:'type/:typeId' , element:<Card_films/>},
      {path:'planet' , element:<Planet/>},
      {path:'arsenal' , element:<Arsenal/>},
      {path:'arsenal/:arsenalId' ,element :<ArsenalCardDetail/>},
      {path:'*' , element:<NotFound/>}
    ]}
  ])

  return < RouterProvider router={router} />
}