import Comment from "../Comment/Comment"
import { useState } from "react"

export default function Posts({post, index}) {
    // console.log(post)
    // console.log(post.comments)
    const [showComments, setShowComments] = useState(false)

    function toggleCommentVisiblity () {
        setShowComments(!showComments)
    }
  
    const [commentArr, setCommentArr] = useState(post.comments)
    // console.log(commentArr)
    const commentMap = commentArr.map((comment, index) => (<Comment comment={comment} key={index}/>))

    return (
    <>
    <h3>{post.category}</h3>
    <p>{post.title}</p>
    <p>{post.text}</p>
    <button onClick={toggleCommentVisiblity}>showComments</button>
    

    {showComments && commentMap}
       
        
    {/* {commentArr} */}
    {/* <Comment/> */}
    </>
    )
}