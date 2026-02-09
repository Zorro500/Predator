import { useEffect, useState } from "react";
import Button from "./Button.jsx";

export default function ActivationLiquidation() {
  const [timer, setTimer] = useState(14); 
  const [isActive, setIsActive] = useState(false); 
  
  useEffect(() => {
    let interval;
    
   
    if (isActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer, isActive]); 
  
  
  const activateTimer = () => {
    setIsActive(true);
  };
  

  const resetTimer = () => {
    setIsActive(false);
    setTimer(14);
  };
  
function Timer(){   
    const audio1 = new Audio(`${import.meta.env.BASE_URL}sounds/taimer.mp3`);
    audio1.play();
     const audio2 = new Audio(`${import.meta.env.BASE_URL}sounds/zvuk-hischnika.mp3`);
    audio2.play();
}

  return (
    <>
    <div className="divLicvidation">
        <Button  handlClik={()=>{
       activateTimer();
       Timer(); 
      }}>
        Активировать режим самоуничтожения
      </Button>
      
      <Button handlClik={resetTimer}>
        Сбросить
      </Button>
      {isActive &&
      <>
      <h2 className="text_title">Режим самоуничтожения активирован</h2>
      <h2 className="text_title">{`Взрыв через :${timer}`}</h2>
      </>
      }
      {timer === 0 && <h1 className="text_title">💥 УНИЧТОЖЕНО!</h1>}
    </div>
    
    </>
  );
}