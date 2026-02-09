
export default function Play(){    
    const audio = new Audio(`${import.meta.env.BASE_URL}sounds/growl_predators.mp3`);
    audio.play();
    }
  