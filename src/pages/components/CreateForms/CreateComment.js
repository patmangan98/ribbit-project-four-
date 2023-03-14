import { useState } from "react";
import { createComment } from "../../../utilities/comment-api";

export default function CreateAComment({ user, setCommentArr, comment, post, thread }){
    console.log(post)

    const [comments, setComments] = useState({
        text: "",
        threadId: `${thread._id}`,
        postId : `${post._id}`

    })


    function handleChange(event){
        setComments({
            ...comment,
            [event.target.name]: event.target.value,
        })
    }

    async function handleSubmit(event){
        event.preventDefault()

        try{
            const formData = {...comments}
            await createComment(formData)
            // .then((res) => res.json())
            // .then((resData) => setCommentArr(resData.comments))
        }catch(error){
            console.error(error)
        }
    }



    return(
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