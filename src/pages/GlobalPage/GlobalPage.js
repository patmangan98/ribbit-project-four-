import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'
import './GlobalPage.css'

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
				<h1 className="mt-4">ribbit 🐸</h1>
				<Link to='/auth'>
					<button className='btn btn-success mt-2 mx-2'>Sign In</button>
				</Link>
				<button className="btn btn-success mt-2" onClick={handleToggle}>Show Global</button>
				{visible && threadMap}
			</>
		)
	}

	return (
		<>

		<h2 className='my-2'>Discover New Ideas!</h2>
		<CreateThread user={user} setThreadArr ={setThreadArr}/>


			{threadMap}
		</>
	)
}
