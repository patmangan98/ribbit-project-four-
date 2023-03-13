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
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container">
                <form>
                    <div className="form-floating">
                        <input
                            className="form-control"
                            placeholder="title"
                            name="title"
                            onChange={handleChange}
                            value={post.title}
                        />
                        <label >Title</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control"
                            placeholder="text"
                            name="text"
                            onChange={handleChange}
                            value={post.text}
                        />
                        <label className="form-label">Text</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control"
                            placeholder="category"
                            name="category"
                            onChange={handleChange}
                            value={post.category}
                        />
                        <label className="form-label">Category</label>
                    </div>
                    <button
                        className="btn btn-success my-3"
                        type="submit"
                        onClick={handleSubmit}>
                        Create Post
                    </button>

                </form>
            </div>
        </>
    )
}