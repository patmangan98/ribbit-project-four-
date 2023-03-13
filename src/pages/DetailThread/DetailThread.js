import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"


import UpdateThread from '../components/UpdateThread/UpdateThread'

export default function DetailThread({thread, user}) {


    // console.log(thread.posts)
    let { threadId } = useParams()

    const [threadPosts, setThreadPosts] = useState(thread.posts)
    // console.log(threadPosts)
    //on create posts, we set the thread posts>
    // const [threadComments, setThreadComments] = useState(thread.posts)
    // console.log(threadComments) //undefined

    // const commentMap = threadPosts.map((post, index) => 
    // (<Comment post={post} key={index} setThreadComments={setThreadComments}/>)

    // )
    const postMap = threadPosts.map((post, index, comment, i) =>
    (<Posts post={post} key={index} user={user} thread={thread}/>
    ))

    // console.log(commentMap)

    return (

    <>
    <UpdateThread thread={thread}/>
    {/* <Posts/> */}
    <CreateAPost user={user} setThreadPosts={setThreadPosts} thread={thread}/>
    {postMap}
    </>

    )
}