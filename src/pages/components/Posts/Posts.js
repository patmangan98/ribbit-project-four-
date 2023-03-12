import Comment from "../Comment/Comment"

export default function Posts({post, index}) {
    console.log(post)
    return (
    <>
    <h3>{post.category}</h3>
    <p>{post.title}</p>
    <p>{post.text}</p>
    
    <Comment/>
    </>
    )
}