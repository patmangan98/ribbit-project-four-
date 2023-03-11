import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"

export default function GlobalPage({user}) {
	
	//this state will store all threads in the db
	const [threadArr, setThreadArr] = useState([])

	useEffect(() => {
		indexThread()
			.then((res) => res.json())
			.then((resData) => console.log(resData))
	})


	if (!user){

		return (
		<>	
			<Link to = '/auth'>
				<button>Sign In</button>
			</Link>
			<h2>Welcome</h2>
		</>
		)
	}

	return (
		<h2>Discover New Ideas!</h2>
	)
}
