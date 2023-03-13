import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"
import UpdateThread from '../components/UpdateThread/UpdateThread'

export default function DetailThread({thread, user, setThreadArr }) {

console.log("adding this for commit")
    const [threadPosts, setThreadPosts] = useState(thread.posts)


    // const commentMap = threadPosts.map((post, index) => 
    // (<Comment post={post} key={index} setThreadComments={setThreadComments}/>)

    // )
    const postMap = threadPosts.map((post, index, comment, i) =>
    (<Posts post={post} key={index} user={user} thread={thread} setThreadArr={setThreadArr}/>))


    return (

    <>
    <UpdateThread thread={thread}/>
    {/* <Posts/> */}
    <CreateAPost user={user} setThreadPosts={setThreadPosts} thread={thread}/>
    {postMap}
    </>

    )
}