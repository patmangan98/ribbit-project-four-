import { useState } from "react";
import { createComment } from "../../../utilities/comment-api";

// import CreateAComment
export default function CreateAComment({ post, user, setCommentArr, comments, thread }) {
    const [comment, setComment] = useState({
        text: "",
        owner: `${user._id}`,
        postId: `${post._id}`,
        threadId: `${thread._id}`
    })


    function handleChange(event) {
        setComment({
            ...comment,
            [event.target.name]: event.target.value,
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = { ...comment }
            await createComment(formData)
        } catch (error) {
            console.error(error)
        }
    }



    return (
        <>
        <form>
            <label>Text</label>
            <input
            name="text"
            value={comment.text}
            onChange={handleChange}
            ></input>
            <button
            type="submit"
            data-id = {comments.postId}
            onClick={handleSubmit}
            >Create Comment</button>
        </form>
        </>
    )






}