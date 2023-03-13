import { useState, useEffect } from "react";
import { createPost } from "../../../utilities/post-api";
import { indexThread } from "../../../utilities/thread-api";

export default function CreateAPost({ user, setThreadPosts, thread }) {
    // console.log(thread.posts)
    const [post, setPost] = useState({
        title: "",
        text: "",
        category: "",
        threadId: `${thread._id}`,
        owner: `${user._id}`,
        comments: []
    })

    function handleChange(event) {
        setPost({
            ...post,
            [event.target.name]: event.target.value,
        })
        console.log(post)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = { ...post }
            await createPost(formData)
                .then(() => {
                    return indexThread()
                })
                .then((res) => res.json())
                .then((resData) => setThreadPosts(resData.posts))
            console.log(formData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form>

                <label >Title</label>
                <input
                    name="title"

                    onChange={handleChange}
                    value={post.title}
                />

                <label>Text</label>
                <input
                    name="text"
                    onChange={handleChange}
                    value={post.text}
                />

                <label>Category</label>
                <input
                    name="category"
                    onChange={handleChange}
                    value={post.category}
                />

                <button
                    type="submit"
                    onClick={handleSubmit}>
                    Create Post
                </button>
            </form>
        </>
    )
}