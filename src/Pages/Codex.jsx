import {predatorCodexContent} from '../data/PredatorCodexContent' ;

export default function Codex(){
    return (
        <div>
        {predatorCodexContent.map((item)=>(
            <div key={item.id}>
                {item.type === 'title' ? <h1>{item.title}</h1> :  ''}
                {item.subtitle ? <h2>{item.subtitle}</h2> : ''}
                {item.type === 'intro' || item.type === 'quote' ? <p>{item.content}</p> : ''}
                {item.type === 'rule' ? 
                <div className='codex'>
                <p>{item.number}</p> 
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <p>{item.example}</p>
                </div> : ''}
            </div>
        ))}
        </div>
    )
}