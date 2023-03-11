import { getToken } from "./users-service"

export function indexThread() {
    const token = getToken()
    return fetch("http://localhost:3001", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
}