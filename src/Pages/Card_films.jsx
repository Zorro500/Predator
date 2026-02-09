import { useParams } from "react-router-dom"
import { predatorType } from "../data/PredatorType";
import Rating from "../components/Rating";
import ProductReviews from "../components/ProductReviews";

export default function Card_films(){
    const {typeId} = useParams();

    const currenFilms = predatorType.find(film=>  film.id === parseInt(typeId)) ;
    

    return(
        <div className="detail_films">
                    <>
                <h1>{currenFilms.type_name}</h1>
                <p>{currenFilms.movie_source}</p>
                <p>{currenFilms.race}</p>
                <p>{currenFilms.habitat}</p>
                <img src={`.${currenFilms.img}`} alt={currenFilms.type_name} className="img_details"/>
                <p>{currenFilms.distinctive_features}</p>
                <p>{currenFilms.armament}</p>
                <Rating/>
                <ProductReviews/>
                    </>
        </div>

    )
}