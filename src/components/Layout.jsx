import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import {useState} from 'react'
import Start from './Start.jsx'
import Navigation from './Navigation.jsx'



function Layout() {
const [startClose,setStartClose] = useState(false) ;
const [timer, setTimer] = useState(14); 

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

<Header onClose = {StartClose} timer = {timer} setTimer={setTimer}/>
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