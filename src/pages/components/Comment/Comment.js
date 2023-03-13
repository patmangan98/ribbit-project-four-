import { useState } from "react";
import { deleteComment } from "../../../utilities/comment-api";
export default function Comment({ comment, setThreadComments }){
// console.log(comment) //undefined


function handleDelete(event){
    event.preventDefault()

    try{
        deleteComment(comment._id)
        .then((res) => res.json())
        .then((resData) => setThreadComments(resData.threads))
    }catch(error){
            console.error(error)
        }
}
 
    return(
        <>
        {/* <h1>{comment.text}</h1> */}
        <p>This is a comment</p>
        <button
        onClick={handleDelete}
        >Delete</button>
        </>
        
    )
}