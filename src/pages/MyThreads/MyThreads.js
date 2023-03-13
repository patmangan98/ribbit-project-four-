// import { checkToken } from '../../utilities/users-service'
import { useEffect, useState } from 'react'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'

export default function MyThreads({user}) {

    let userThreads = []

    function findUserThreads (arr) {
        console.log(arr)
        arr.forEach((thread) => {
            if(thread.owner._id === user._id){
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
  
    const threadMap = userThreads.map((thread, index) => (<ThreadCard thread={thread} key ={index}/>)) 


    return (
        <>
            <h2>Create Thread</h2>
            {threadMap}
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
        )
}