import {predatorIntroContentHome} from '../data/PredatorContent'

export default function Home(){

    return (
        <div>
            {predatorIntroContentHome.map((item)=>(
                <div key = {item.id}>
                    {item.type === 'main-title' ? <h1>{item.content}</h1> : <p>{item.content}</p>}
                </div>
            ))}
        </div>
    )
}