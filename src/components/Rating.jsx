import { useEffect,  useState } from "react"

export default function Rating(){
    const [rating, setRating] = useState(0) ;
    const [ratingClass,setRatingClass] = useState('');
    const [clicked,setCliced] = useState(false) ;
    const [averageRating, setAverageRating] = useState([]);
    
    
    

const sumAverageRating = averageRating.reduce((acc,elem)=> acc + elem,0) ;
const resultAverageRating =  sumAverageRating / averageRating.length ;
const arry = [1,2,3,4,5] ;
   
useEffect(()=>{
    if(clicked){
for(let i = 0 ; i < arry.length; i++){
if(rating === arry[i]){
setRatingClass(`ratingActive`) ;
}
arry[i] === rating ? setAverageRating(prev=> [...prev, arry[i]]): '' ;
    }
}
  },[rating,clicked] )

 
    
    return (
        <>
        <span>Рейтинг : { isNaN(resultAverageRating) ? 0 : resultAverageRating.toFixed(1)}
            
        </span>
        <div>
           { arry.map((arr) => (
           <button  key = {arr}  id={`${arr}`}
           onClick= {()=>{
            setCliced(true)  ; 
            setRating(arr ? arry.indexOf(arr)+1 : 0);
        } }
          className={ arr <= rating ? ratingClass : "ratingDisable"}>★</button>
           ))} <br /> <span className="averageRating_style">Ваша оценка: { rating}</span>
        </div>
        </>
    )
}