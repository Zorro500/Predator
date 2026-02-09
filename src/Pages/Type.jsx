import { Link } from "react-router-dom"
import { predatorType } from "../data/PredatorType"

export default function Type(){
    return (
        <div className="type">
        {predatorType.map((item)=>
        <Link to = {`/type/${item.id}` } key = {item.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="type2">
            <h2>{item.type_name}</h2>
            <img src={item.img} alt="predator" className="img_films"/>
            <p>Был замечен в фильме : {item.movie_source}</p>
            <p>Расса :{item.race}</p>
            <p>Харрактерные признаки:{item.distinctive_features}</p>
        </div>
         </Link>
        )}
        </div>
    )
}