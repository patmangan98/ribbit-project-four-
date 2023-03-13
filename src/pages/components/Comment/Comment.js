import { useState } from "react";
import { deleteComment } from "../../../utilities/comment-api";
// import CreateAComment from "../CreateForms/CreateComment";

export default function Comment({ comments, setCommentArr, thread }) {
    console.log(comments)

    const [deleteAComment, setDeleteAComment] = useState({
        threadId: `${thread._id}`
    })

    function handleDelete(event) {
        event.preventDefault()
        console.log(deleteAComment)
        try {
            deleteComment(thread._id, comments._id)
                .then((res) => res.json())
                .then((resData) => setDeleteAComment(resData.comments))
        } catch (error) {
            console.error(error)
        }
    }


    return (

        <>
            <div className="container border rounded-4 my-2 shadow-sm">
                <p>{comments.text}</p>

                <button
                    className="btn btn-danger mb-2"
                    onClick={handleDelete}
                    data-id={deleteAComment.threadId}
                >Delete</button>
            </div>
        </>
    )
}