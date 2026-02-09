import Button from "./Button"
import { Link } from "react-router-dom"


export default function Navigation(){

    function PlayNavigation(){    
    const audio = new Audio("/sounds/button_audio.mp3");
    audio.play();
    }

    return(
        <div className="navigation">
    <Link to={'/'}><Button handlClik={PlayNavigation}>Главная</Button></Link>
    <Link to={'/codex'}><Button handlClik={PlayNavigation}>Кодекс</Button></Link>
   <Link to={'/type'}><Button handlClik={PlayNavigation}>Фильмы</Button></Link>
    <Link to={'/planet'}><Button handlClik={PlayNavigation}>Планета</Button></Link>
    <Link to={'/arsenal'}><Button handlClik={PlayNavigation}>Арсенал</Button></Link>
        </div>
    )
}