import { getToken } from './users-service'

// const BASE_URL = "https://ribbit-server.onrender.com"
// const BASE_URL = '/api/comment'

export function createComment(data, threadId){
    const token = getToken()
    console.log(data)
    // console.log(threadId)
return fetch (`/api/comment/new`, {
    method: 'POST',
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data)
})
}

export function deleteComment(threadId, commentId){
    const token = getToken()
    console.log(commentId)
    console.log(threadId)
    return fetch (`/api/comment/${threadId}/${commentId}`, {
        method: 'DELETE',
        headers:{
            Authorization: `Bearer ${token}`,
        }
    })
}