import { Link, useParams } from "react-router-dom"

export default function ThreadCard ({thread}) {
    let {threadId} = useParams()

    console.log(thread._id)
    console.log(thread)

    return ( 
        <div>
        
        
    
        <p>{thread.topic}</p>

        
        
        <Link to = {`/thread/${thread._id}`}>
        <button>Inspect Thread</button>
        </Link>


        </div>
    )
}