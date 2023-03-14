import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import DetailThread from '../DetailThread/DetailThread'
import GlobalPage from '../GlobalPage/GlobalPage';
import MyThreads from '../MyThreads/MyThreads';
import { indexThread } from "../../utilities/thread-api"
import NavBar from '../components/NavBar/NavBar';
import './App.css';


import { getUser } from '../../utilities/users-service'
// import { use } from '../../../routes/api/users';

export default function App() {
  const [user, setUser] = useState(getUser())

  const [threadArr, setThreadArr] = useState([])

  //use effect
  useEffect(() => {
	indexThread()
		.then((res) => res.json())
		.then((resData) => setThreadArr(resData.threads))
  }, [])

  const threadRoutes = threadArr.map((thread) => <Route key={thread._id} path= {`/thread/${thread._id}`} element={<DetailThread user={user} thread={thread}/>}/>)

 return (
		<main className='App'>
			{user ? (
				<>
					<NavBar user={user} setUser={setUser}/>
					<Routes>
						<Route path='/global' element={<GlobalPage user={user}/>} />
						<Route path='/mythreads' element={<MyThreads user={user} />} />
						{/* <Route path= '/thread/:threadId' element ={<DetailThread />} /> */}
						{threadRoutes}
					</Routes>
				</>
			) : (
				<>
				<Routes>
					<Route path='/auth' element={<AuthPage setUser={setUser}/>} />
				</Routes>
				<GlobalPage />
				</>
			)}
		</main>
	)
}
