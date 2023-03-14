import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexThread } from "../../utilities/thread-api"
import ThreadCard from '../components/ThreadCard/ThreadCard'
import CreateThread from '../components/CreateForms/CreateThread'
import './GlobalPage.css'
import { useNavigate } from 'react-router-dom'

export default function GlobalPage({ user }) {
	const [threadArr, setThreadArr] = useState([])

	useEffect(() => {
		indexThread()
			.then((res) => res.json())
			.then((resData) => setThreadArr(resData.threads))
	}, [])

	const navigate = useNavigate()

	function handleClick() {
		navigate('/')
	}

	function handleClick() {
		window.scrollTo(0, 0)
	}

	const threadMap = threadArr.map((thread, index) => (<ThreadCard thread={thread} key={index} setThreadArr={setThreadArr} />))

	const [visible, setVisible] = useState(false)
	const handleToggle = () => {
		setVisible((current) => !current);
	}

	if (!user) {

		return (
			<>
				<div onClick={handleClick}><h1 className="mt-4">ribbit 🐸</h1></div>
				<Link to='/auth'>
					<button className='btn btn-success mt-2 mx-2'>Hop-In</button>
				</Link>
				<button className="btn btn-success mt-2" onClick={handleToggle}>Show Global</button>
				{visible && threadMap}
			</>
		)
	}

	return (
		<>


			<h2 className='my-2'>Discover New Ideas!</h2>
			<CreateThread user={user} setThreadArr={setThreadArr} />
			{threadMap}
			<div><p id='frog' onClick={handleClick} className="hop-back-up">🐸</p></div>
		</>
	)
}
