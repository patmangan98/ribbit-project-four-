import { useEffect, useState } from 'react'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'

export default function MyThreads({ user, threadId }) {

    let userThreads = []

    function findUserThreads(arr) {
        console.log(arr)
        arr.forEach((thread) => {
            if (thread.owner._id === user._id) {
                userThreads.push(thread)
            }
        })
    }

    const [myThreadArr, setMyThreadArr] = useState([])

    useEffect(() => {
        indexThread()
            .then((res) => res.json())
            .then((resData) => setMyThreadArr(resData.threads))
    }, [])

    findUserThreads(myThreadArr)

    const threadMap = userThreads.map((thread, index) => (<ThreadCard thread={thread} key={index} />))


    return (
        <>
            <h2>Create Thread</h2>
            {threadMap}

        </>
    )
}