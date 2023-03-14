import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'

export default function GlobalPage({ user }) {
	const [threadArr, setThreadArr] = useState([])
	
	useEffect(() => {
		indexThread()
			.then((res) => res.json())
			.then((resData) => setThreadArr(resData.threads))
	}, [])

	const threadMap = threadArr.map((thread, index) => (<ThreadCard thread={thread} key={index} setThreadArr={setThreadArr} />))
	
	const [visible, setVisible] = useState(false)	
	const handleToggle = () => {
		setVisible((current) => !current);
	  }

	if (!user) {

		return (
			<>
				<h1 className="mt-3">ribbit</h1>
				<Link to='/auth'>
					<button className='btn btn-success'>Sign In</button>
				</Link>
				<h2>Welcome</h2>
				<button className="btn btn-success mb-3" onClick={handleToggle}>Show Global</button>
				{visible && threadMap}
			</>
		)
	}

	return (
		<>
			<h2 className='my-3'>Discover New Ideas!</h2>
			<CreateThread user={user} setThreadArr={setThreadArr} />

			{threadMap}
		</>
	)
}
