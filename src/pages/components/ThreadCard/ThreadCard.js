import { Link, useParams } from "react-router-dom"
import { detailThread } from ""

export default function ThreadCard ({thread}) {
    let {threadId} = useParams()

    
    return ( 
        <div>
        
        
        


        <p>{thread.topic}</p>

        <Link to = '/thread/:threadId'>
        <button>Inspect Thread</button>
        </Link>


        </div>
    )
}