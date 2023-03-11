import { getToken } from "./users-service"

export function indexThread() {
    const token = getToken()
    return fetch("http://localhost:3001/api/thread", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}