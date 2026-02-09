
import Button from "./Button.jsx"



export default function Start({onStart}){

 
function PlayStart(){    
    const audio = new Audio(`${import.meta.env.BASE_URL}/sounds/teplovizor.mp3`);
    audio.play();
    }

    return  (

<>
{document.body.classList.remove('body2')}
    <header className= "header_1">
    </header>
    <div className="navigation">
        <Button handlClik={()=>{
            PlayStart();
            onStart();
        }}>Запустить программу</Button>
    </div>
</>
   
    )
}
