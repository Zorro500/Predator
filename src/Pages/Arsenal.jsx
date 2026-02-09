import { PredatorArsenal } from "../data/PredatorArsenal"
import { Link} from "react-router-dom"

export default function Arsenal(){


return (
    <>
    <h1>Arsenal</h1>
    <div className="ArsenalContainer">
{PredatorArsenal.map((item)=>
<div  className="ArsenalCardDetail">
    <Link to={`/arsenal/${item.id}`} key = {item.id}style={{ textDecoration: 'none', color: 'inherit' }}>
    <h2>{item.name}</h2>
    <img src={item.img[0]} alt="img" className="ArsenalImg"/>
    </Link>
</div>

)}
    </div>
    </>
)
}