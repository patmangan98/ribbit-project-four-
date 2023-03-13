// import { checkToken } from '../../utilities/users-service'
import { useEffect, useState } from 'react'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'

export default function MyThreads({user}) {

    const [myThreadArr, setMyThreadArr] = useState([])

    return (
        <>
            <h2>Create Thread</h2>
            {/* <button onClick={handleCheckToken}>Check When My Login Expires</button> */}
        </>
        )
}