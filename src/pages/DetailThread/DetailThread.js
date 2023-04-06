import { useState, useEffect } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"
import UpdateThread from '../components/UpdateThread/UpdateThread'
import { indexPosts } from "../../utilities/post-api"

export default function DetailThread({thread, user, setThreadArr }) {


    const [posts, setPosts] = useState([])

    useEffect(() => {
        indexPosts(thread._id)
            .then((res) => res.json())
            .then((resData) => setPosts(resData.post))
    }, [])

    console.log(posts)
    // const [threadPosts, setThreadPosts] = useState(posts)

    // console.log(threadPosts)


    const postMap = posts.map((post, index, comments) =>
        (<Posts post={post} key={index} user={user} thread={thread} comments={comments}/>))

    return (

        <>
            <UpdateThread thread={thread} />
            {/* <Posts/> */}
            <CreateAPost
            user={user} 
            setPosts={setPosts} 
            thread={thread} 
            
            />
            {postMap}
        </>

    )
}