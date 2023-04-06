import { useState } from "react"
import Posts from "../components/Posts/Posts"
import CreateAPost from "../components/CreateForms/CreatePost"
import UpdateThread from '../components/UpdateThread/UpdateThread'

export default function DetailThread({ post, thread, user, setThreadArr }) {

    const [threadPosts, setThreadPosts] = useState(thread.posts)

    const postMap = threadPosts.map((post, index, comment, i) =>
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
                setThreadPosts={setThreadPosts}
                thread={thread}

            />
            {postMap}
        </>

    )
}