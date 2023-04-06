import { useState } from "react";
import { createPost } from "../../../utilities/post-api";
import { indexThread } from "../../../utilities/thread-api";
import axios from "axios";

export default function CreateAPost({ user, setThreadPosts, thread }) {
    // console.log(user)
    // console.log(thread)
  const [post, setPost] = useState({
    title: "",
    text: "",
    category: "",
    image: "",
    threadId: `${thread._id}`,
    owner: `${user._id}`,
    comments: [],
  });

  function handleChange(event) {
    setPost({
      ...post,
      [event.target.name]: event.target.value,
    });
    console.log(post);
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const handleImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPost({
      ...post,
      image: base64,
    });
    console.log("upload success");
  };

  const upload = async (newImage) => {
    try {
      await axios.post("http://localhost:3000/posts/new", newImage);
    } catch (error) {
      console.error(error);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    upload(post.image);
    try {
      const formData = { ...post };
      await createPost(formData)
        .then(() => {
          return indexThread();
        })
        .then((res) => res.json())
        .then((resData) => setThreadPosts(resData.posts));
    } catch (error) {
      console.log(error);
    }
    // window.location.reload();
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
            <label>Title</label>
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
          <div className="form-floating">
            <input
              className="form-control"
              placeholder="category"
              name="image"
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => handleImage(e)}
            />
            <label className="form-label">Image</label>
          </div>
          <button
            className="btn btn-success my-3"
            type="submit"
            onClick={handleSubmit}
          >
            Create Post
          </button>
        </form>
      </div>
    </>
  );
}
