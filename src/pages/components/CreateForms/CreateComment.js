import { useState } from "react";
import { createComment } from "../../../utilities/comment-api";

export default function CreateAComment({ user, setCommentArr, comments }){
    console.log(comments)
    const [comment, setComment] = useState({
        text: "",
        owner: `${user._id}`
    })


    function handleChange(event){
        setComment({
            ...comment,
            [event.target.name]: event.target.value,
        })
    }

    async function handleSubmit(event){
        event.preventDefault()

        try{
            const formData = {...comment}
            await createComment(formData)
            .then((res) => res.json())
            .then((resData) => setCommentArr(resData.comments))
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
            onClick={handleSubmit}
            >Create Comment</button>
        </form>
        </>
    )






}