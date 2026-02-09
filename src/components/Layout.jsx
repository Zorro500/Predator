import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {useState,useEffect} from 'react'
import Start from './Start.jsx'
import Navigation from './Navigation.jsx'



function Layout() {
const [startClose,setStartClose] = useState(false) ;

function StartClose(){
    setStartClose(prev=>!prev)
}



  return (
    <>
    {
      !startClose 
      ?
      <>
<Start onStart = {StartClose}/>
</>
:
<>

<Header onClose = {StartClose}/>
<Navigation/>
<main className="content-container">
  <Outlet/>
</main>
<Footer/>
</>
    }

    </>
)
}
export default Layout