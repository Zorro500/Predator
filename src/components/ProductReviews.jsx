import { useState } from "react"

export default function ProductReviews(){
    const [review ,setReview] = useState([]) ;
    const [inputValue,setInputValue] =useState('')


function HandleReviev(){
    if(inputValue.trim() !== ''){
    const newReview = {
        id : Date.now(),
        text : inputValue,
        likes : 0,
        dislikes : 0,
        styleClass : 'btm_likeDislike_active'
    }
    setReview([...review,newReview])
    setInputValue('')
    }else{
        alert('Нельзя добавить путое поле,введите текст и попробуйте еще раз')
    }
}

function HandleLikes(reviewId){
    setReview(prev=>
        prev.map(review=> review.id === reviewId ? {...review,likes : review.likes + 1} : review 
        ))}

function HandleDislikes(reviewId){
    setReview(prev=>
        prev.map(review=> review.id === reviewId ? {...review,dislikes : review.dislikes + 1} : review 
        ))}




    return(
        <div>
<input type="text" placeholder="Введите текст" value ={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
<button onClick={HandleReviev}>Добавить отзыв</button>
<div className="div_reviev">
    <h2>Отзывы</h2>
    {
review.map(prev=>(

             <div className="revievDiv">
                <div>
               <img src="../img/user.webp" alt="user" className="img_revievDiv"/>
              </div>
              <div className="text">
                <p className="text">{prev.text}</p>
              </div>
              <div className="likeDislike_div">
            <button onClick={()=>{HandleLikes(prev.id)}} className={prev.likes > 0 ? `btm_likeDislike_active` : "btm_likeDislike"}>{prev.likes === 0 ? '👍' : `${prev.likes}👍`} </button>
            <button onClick={()=>{HandleDislikes(prev.id)}} className={prev.dislikes > 0 ? `btm_likeDislike_active` : "btm_likeDislike"}>{prev.dislikes === 0 ? '👎' : `${prev.dislikes}👎`} </button>
              </div>
             </div>         
))
    }
        </div>
        </div>
    )
}
