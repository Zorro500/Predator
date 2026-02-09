import ButtonAudio from "./audio.js"

export default function Button({children,handlClik,mouseEnter = {ButtonAudio}}){
    return(
<button className={'ol_btn'} onClick={handlClik} onMouseEnter = {mouseEnter}>{children}</button>
    )
}
