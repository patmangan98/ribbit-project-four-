import { useState } from "react";
import { createComment } from "../../../utilities/comment-api";

export default function CreateAComment({ post, user, thread }) {
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
        window.location.reload();
    }

    return (
        <>
            <form>
                <input
                    name="text"
                    placeholder="Write comment here"
                    value={comment.text}
                    onChange={handleChange}
                ></input>
                <button
                    type="submit"
                    data-id={comment.postId}
                    onClick={handleSubmit}
                >Create Comment</button>
            </form>
        </>
    )
}