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
        <div className="container border rounded-4 my-2 shadow-sm">
        
        <p className="mt-2">This is a comment</p>
        <button
        className="btn btn-danger mb-2"
        onClick={handleDelete}
        >Delete</button>
        </div>
        
    )
}