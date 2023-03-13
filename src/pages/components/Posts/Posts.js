import CreateAComment from "../Comment/Comment"
import { useState } from "react"

export default function Posts({ post, index, user }) {
    // console.log(post)
    // console.log(post.comments)
    const [showComments, setShowComments] = useState(false)



    function handleShowComments(event) {
        try {

        } catch (error) {
            console.error(error)

        }
    }




    function toggleCommentVisiblity() {
        setShowComments(!showComments)
    }

    const [commentArr, setCommentArr] = useState(post.comments)
    // console.log(commentArr)
    const commentMap = commentArr.map((comments, index) => (<CreateAComment
        comments={comments}
        key={index}
        user={user}
        setCommentArr={setCommentArr}
    />
    ))

    return (
        <>
            <div className="container  border rounded-4 shadow-sm my-4">
                <h3 className="mt-2">{post.category}</h3>
                <p>{post.title}</p>
                <p>{post.text}</p>
                <button
                    className="btn btn-success mb-3"
                    onClick={toggleCommentVisiblity}
                    >Show Comments
                </button>
            </div>
            {showComments && commentMap}

        </>
    )
}