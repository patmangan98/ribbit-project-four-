import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"
import UpdateThread from '../components/UpdateThread/UpdateThread'

export default function DetailThread({thread, user}) {


    const [threadPosts, setThreadPosts] = useState(thread.posts)

    const postMap = threadPosts.map((post, index) =>
    (<Posts post={post} key={index} user={user} thread={thread} setThreadPosts={setThreadPosts}/>
    ))

    return (

    <>
    <UpdateThread thread={thread}/>
    {/* <Posts/> */}
    <CreateAPost user={user} setThreadPosts={setThreadPosts} thread={thread}/>
    {postMap}
    </>

    )
}