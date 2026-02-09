import { useParams } from "react-router-dom"
import { PredatorArsenal } from "../data/PredatorArsenal"
import { useState } from "react";

export default function ArsenalCardDetail(){
const {arsenalId} = useParams() ;
const [clikImg, setClickImg] = useState(false) ;
const [colectionImg,setColectionImg] = useState(0) ;



const arsenalIdDetail = PredatorArsenal.find(e=> e.id === parseInt(arsenalId))

    return(
        <div className="ArsenalDetailContainer">
           <h1>{arsenalIdDetail.name}</h1>
           <div className="positionAbsolute">

            {clikImg
            ?
        <div>
<button onClick={()=>setClickImg(false)}>Закрыть</button>
<div className="ArsenalDetailImgActive">
<button className="btm_ArsenalDetailImgActive" onClick={colectionImg > 0 ? ()=>setColectionImg(prev=> prev-1):colectionImg}> ◀ </button>
<img src={`${import.meta.env.BASE_URL}${arsenalIdDetail.img[colectionImg]}`} alt="img"  onClick={()=>setClickImg(false)}/>
<button className="btm_ArsenalDetailImgActive" onClick={colectionImg  < arsenalIdDetail.img.length-1 ? ()=>setColectionImg(prev=>prev+1): colectionImg}>▶</button>
</div>
        </div>
        :
        <div>
            <img src={`${import.meta.env.BASE_URL}${arsenalIdDetail.img[colectionImg]}`} alt="img"  className= "ArsenalDetailImg" onClick={()=>setClickImg(true)}/>
            <p>{arsenalIdDetail.description}</p>
           <p>{arsenalIdDetail.features}</p>
        </div>
        }
        </div>
        </div>
    )
}