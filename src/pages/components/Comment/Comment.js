import { useState } from "react";
import { deleteComment } from "../../../utilities/comment-api";
// import CreateAComment from "../CreateForms/CreateComment";

export default function Comment({ comments, setCommentArr, thread}){
console.log(comments)

const [deleteAComment, setDeleteAComment] = useState({
    threadId: `${thread._id}`
})
// console.log(deleteAComment)

function handleDelete(event){
    event.preventDefault()
    console.log(deleteAComment)
    try{
        deleteComment(thread._id, comments._id)
            .then((res) => res.json())
            .then((resData) => setDeleteAComment(resData.comments))
    }catch(error){
            console.error(error)
        }
}



  
// const [commentArr, setCommentArr] = useState(post.comments)
// // console.log(commentArr)
// const commentMap = commentArr.map((comments, index) => (<CreateAComment 
//     comments={comments} 
//     key={index} 
//     user={user} 
//     setCommentArr={setCommentArr}
//     />
//     ))

 
    return(
        <>
        <p>{comments.text}</p>
        {/* <p>This is a comment</p> */}
        {/* {commentMap} */}
        <button
        onClick={handleDelete}
        data-id={deleteAComment.threadId}
        >Delete</button>
        </>
        
    )
}