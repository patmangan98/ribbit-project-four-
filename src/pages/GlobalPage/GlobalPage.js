import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'

export default function GlobalPage({user}) {
	
	//this state will store all threads in the db
	const [threadArr, setThreadArr] = useState([])

	useEffect(() => {
		indexThread()
			.then((res) => res.json())
			.then((resData) => setThreadArr(resData.threads))
	}, [])

	// console.log(threadArr)
	const threadMap = threadArr.map((thread, index) => (<ThreadCard thread={thread} key={index} setThreadArr={setThreadArr}/>))


	if (!user){

		return (
		<>	
			<h1 className="mt-3">ribbit</h1>
			<Link to = '/auth'>
				<button className='btn btn-success'>Sign In</button>
			</Link>
			<h2>Welcome</h2>
			{threadMap}
		</>
		)
	}

	return (
		<>
		<h2 className='my-5'>Discover New Ideas!</h2>
		<CreateThread user={user} setThreadArr ={setThreadArr}/>

		{threadMap}
		</>
	)
}
