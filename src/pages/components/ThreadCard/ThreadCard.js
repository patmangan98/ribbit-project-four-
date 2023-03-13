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
        <div className="container border rounded-4 shadow-sm my-3">
        
        
    
        <h3 className="my-2">{thread.topic}</h3>

        <button className="btn btn-danger" onClick={handleDeleteClick}>Delete</button>
        
        <Link to = {`/thread/${thread._id}`}>
        <button className="btn btn-success mx-3 my-2">Inspect Thread</button>
        </Link>


        </div>
    )
}