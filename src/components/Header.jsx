import { useState } from "react"
import Button from "./Button.jsx"
import Play from "./audio.jsx";
import ActivationLiquidation from "./licvidation.jsx";



export default function Header({speed=250,onClose }){
const [predatorText,setPredatorText] = useState('') ;

let text = 'I SEE YOU...' ;

function StartTextPredator(){
let i = 0; 
setPredatorText('') ;
const type =()=>{
    if(i < text.length){
setPredatorText(text.substring(0,i+1)) ;
i++ ;
setTimeout(type,speed);
    }
}
type();
}

    return  (
    <>
    {document.body.classList.add('body2')}
    <header className= "header_2">
            <div className="funtionYuja">
            <div className="helloYuja">
            <Button handlClik={onClose} >Закрыть программу</Button>
            <Button handlClik={()=>{
            StartTextPredator();
            Play();
            }}>ПОПРИВЕТСТВОВАТЬ ЯУТЖА</Button>
            {predatorText && <div className="text_title"><h1>{predatorText}</h1></div>}        
            </div>
            <ActivationLiquidation/>
            </div>
        </header>
        </>
    )
}
