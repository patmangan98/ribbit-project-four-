import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import { showThread } from "../../utilities/thread-api"
import UpdateThread from "../components/UpdateThread/UpdateThread"

export default function DetailThread({thread}) {
    // console.log(thread.posts)
    let { threadId } = useParams()

    const [threadPosts, setThreadPosts] = useState(thread.posts)   
    
    //on create posts, we set the thread posts>

    const postMap = threadPosts.map((post, index) => (<Posts post ={post} key={index}/>))
   
    return (
    <>
    <UpdateThread thread={thread}/>
    {/* <Posts/> */}
    {postMap}
    </>
    )
}