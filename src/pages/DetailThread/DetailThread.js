import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import { showThread } from "../../utilities/thread-api"
import Comment from "../components/Comment/Comment"
import CreateAPost from "../components/CreateForms/CreatePost"
console.log()
export default function DetailThread({thread, user}) {
    // console.log(thread.posts)
    let { threadId } = useParams()

    const [threadPosts, setThreadPosts] = useState(thread.posts)   
    console.log(threadPosts)
    //on create posts, we set the thread posts>
    const [threadComments, setThreadComments] = useState(thread.posts.comments)
console.log(threadComments) //undefined

    // const commentMap = threadComments.map((comment, index) => 
    // (<Comment comment={comment} key={index} setThreadComments={setThreadComments}/>)

    // )
    const postMap = threadPosts.map((post, index) => 
    (<Posts post ={post} key={index} user={user}/>))
   
    return (
    <>
    {/* <Posts/> */}
    <CreateAPost user={user} setThreadPosts={setThreadPosts} thread={thread}/>
    {postMap}
    </>
    )
}