// import CreateAComment from "../Comment/Comment"
import { useState } from "react"
import Comment from "../Comment/Comment"
export default function Posts({post, thread, user}) {
    // console.log(post)
    // console.log(post.comments)
    const [showComments, setShowComments] = useState(false)



    // function handleShowComments(event){
    //     try{

    //     }catch(error){
    //         console.error(error)

    //     }
    // }




    function toggleCommentVisiblity () {
        setShowComments(!showComments)
    }
  
    const [commentArr, setCommentArr] = useState(post.comments)
    // console.log(commentArr)
    const commentMap = commentArr.map((comments, index) => (
        <Comment 
        comments={comments} 
        key={index} 
        user={user} 
        thread={thread}
        setCommentArr={setCommentArr}
        />
        ))

        console.log(commentArr)
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