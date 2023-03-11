import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'

export default function GlobalPage({user}) {
	
	//this state will store all threads in the db
	const [threadArr, setThreadArr] = useState([])

	useEffect(() => {
		indexThread()
			.then((res) => res.json())
			.then((resData) => setThreadArr(resData.threads))
	}, [])

	// console.log(threadArr)
	const threadMap = threadArr.map((thread, index) => (<ThreadCard thread={thread} key={index}/>))


	if (!user){

		return (
		<>	
			<Link to = '/auth'>
				<button>Sign In</button>
			</Link>
			<h2>Welcome</h2>
			{threadMap}
		</>
		)
	}

	return (
		<>
		<h2>Discover New Ideas!</h2>
		{threadMap}
		</>
	)
}
