import { getToken } from "./users-service"

// const BASE_URL = "https://ribbit-server.onrender.com"
const BASE_URL = '/api/posts'

export function createPost(data){
    const token = getToken()
    console.log(data)
return fetch (`/api/posts/new`, {
    method: "POST",
    headers:{
        Accept: "application/json",
        'Content-Type': "application/json",
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
})
}

export function deletePost(threadId, postId){
    console.log(threadId, postId)
    const token = getToken()
    return fetch (`${BASE_URL}/api/posts/${threadId}/${postId}`, {
        method: "DELETE",
        headers:{
            'Authorization': `Bearer ${token}`,
        },
    })
}

export function showPost(id){
    const token = getToken()

    return fetch (`${BASE_URL}/api/posts/${id}`, {
        method: "GET",
        headers:{
            'Authorization': `Bearer ${token}`,
        },
    })
}

export function indexPosts(threadId){
    const token = getToken()
    return fetch(`/api/posts/index/${threadId}`, {
        method : "GET",
            headers : {
                'Authorization': `Bearer ${token}`
            },
    })
}