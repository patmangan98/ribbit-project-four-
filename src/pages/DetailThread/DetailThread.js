import { useState, useEffect } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"
import UpdateThread from '../components/UpdateThread/UpdateThread'
import { indexPosts } from "../../utilities/post-api"


export default function DetailThread({thread, user, setThreadArr }) {
    // console.log(thread._id)
    const [posts, setPosts] = useState([])
   
    useEffect(() => {
        indexPosts(thread._id)
            .then((res) => res.json())
            .then((resData) => setPosts(resData.post))
    }, [])

    console.log(posts)

    // const [threadPosts, setThreadPosts] = useState(thread.posts)

    const postMap = posts.map((post, index, comment) =>
    (<Posts
        post={post}
        key={index}
        user={user}
        thread={thread}
        setThreadArr={setThreadArr}
        comment={comment} />))

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