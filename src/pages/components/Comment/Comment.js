import { useState, forceUpdate, reload } from "react";
import { deleteComment } from "../../../utilities/comment-api";
import { indexThread } from "../../../utilities/thread-api";
// import CreateAComment from "../CreateForms/CreateComment";

export default function Comment({ comments, setCommentArr, thread, setThreadArr}){
console.log(comments)

const [deleteAComment, setDeleteAComment] = useState({
    threadId: `${thread._id}`
})

// const [comment, setComment] = useState([])
// console.log(deleteAComment)

function handleDelete(event){
    // event.preventDefault()
    // console.log(deleteAComment)
    try{
        deleteComment(thread._id, comments._id)
            .then((res) => res.json())
            .then((resData) => setDeleteAComment(resData.comments))
            // .then(forceUpdate())
    }catch(error){
            console.error(error)
        }
}



function handleReRender () {
 try {
    indexThread()
    .then((res) => res.json())
    .then((resData) => setCommentArr(resData.threads))
 } catch (error) {
    console.error(error) }
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
      
       
        <div className="container border rounded-4 my-2 shadow-sm">
        <p>{comments.text}</p>
        

        <button
        className="btn btn-danger mb-2"
        onClick={() => {
            handleDelete()
            handleReRender()
        }}
        data-id={deleteAComment.threadId}
        >Delete</button>
        </div>
        </>
    )
}