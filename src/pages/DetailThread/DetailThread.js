import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import { showThread } from "../../utilities/thread-api"

import CreateAPost from "../components/CreateForms/CreatePost"
console.log()
export default function DetailThread({thread, user}) {

    // console.log(thread.posts)
    let { threadId } = useParams()

    const [threadPosts, setThreadPosts] = useState(thread.posts)   
    console.log(threadPosts)
    //on create posts, we set the thread posts>

    const postMap = threadPosts.map((post, index) => (<Posts post ={post} key={index}/>))
   
    return (
    <>
    <UpdateThread thread={thread}/>
    {/* <Posts/> */}
    <CreateAPost user={user} setThreadPosts={setThreadPosts} thread={thread}/>
    {postMap}
    </>
    )
}