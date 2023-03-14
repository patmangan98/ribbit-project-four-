import { useState } from "react"
import { deletePost } from "../../../utilities/post-api"
import Comment from "../Comment/Comment"
import CreateAComment from "../CreateForms/CreateComment"


export default function Posts({post, thread, user, setThreadArr}) {


    const [isPostOwned, setIsPostOwned] = useState(
        post.owner === user._id ? true : false
    )
        console.log(isPostOwned)
        console.log(post.owner)
        console.log(user._id)

    const [showComments, setShowComments] = useState(false)

    const [deleteAPost] = useState({
        threadId: `${thread._id}`,
        postId: `${post._id}`
    })

    function toggleCommentVisiblity() {
        setShowComments(!showComments)
    }

    function handleDeletePost(event){
        event.preventDefault()
        try{
            deletePost(thread._id, post._id)
                .then((res) => res.json())
                .then((resData) => 
                setThreadArr(resData.posts))
        }catch(error){
            console.error(error)
        }
        window.location.reload();
    }

    const [commentArr, setCommentArr] = useState(post.comments)

    const commentMap = commentArr.map((comments, index) => (
        <Comment 
        comments={comments} 
        key={index} 
        user={user} 
        thread={thread}
        setThreadArr ={setThreadArr}
        setCommentArr={setCommentArr}
        post={post}
    />
    ))

    if (isPostOwned === true) {
        return (
                  
            <>
            <div className="container border rounded-4 shadow-sm my-4">
                <h3 className="mt-2">{post.category}</h3>
                <p>{post.title}</p>
                <p>{post.text}</p>
                <button
                    className="btn btn-success mb-3"
                    onClick={toggleCommentVisiblity}
                    >Show Comments
                </button>
                <button
                    className="btn btn-success mb-3"
                    onClick={handleDeletePost}
                    data-id={deleteAPost.threadId}
                    >Delete Post
                </button>

                <CreateAComment 
                post={post} 
                user={user}
                thread={thread}
                setCommentArr={setCommentArr}
                />
                {showComments && commentMap}
            </div>
            </>
        )
    } else {
       
          return (

        <>
            <div className="container border rounded-4 shadow-sm my-4">
                <h3 className="mt-2">{post.category}</h3>
                <p>{post.title}</p>
                <p>{post.text}</p>
                <button
                    className="btn btn-success mb-3"
                    onClick={toggleCommentVisiblity}
                    >Show Comments
                </button>
             
                <CreateAComment 
                post={post} 
                user={user}
                thread={thread}
                setCommentArr={setCommentArr}
                />
                {showComments && commentMap}
            </div>
            </>
          )
           

    }

    
}