import { Link, useParams } from "react-router-dom"
import { deleteThread, indexThread } from "../../../utilities/thread-api"


export default function ThreadCard ({thread, setThreadArr}) {

    let {threadId} = useParams()

    function handleDeleteClick(event) {
        event.preventDefault()
        try {
            deleteThread(thread._id)
                .then(() => {
                    return indexThread()
                        .then((res) => res.json())
                        .then((resData) => setThreadArr(resData.threads))
                })
        } catch (error) {
            console.error(error)
        }
       
        
    }

    // console.log(thread._id)
    // console.log(thread)

    return ( 
        <div>
        
        
    
        <p>{thread.topic}</p>

        <button onClick={handleDeleteClick}>Delete</button>
        
        <Link to = {`/thread/${thread._id}`}>
        <button>Inspect Thread</button>
        </Link>


        </div>
    )
}