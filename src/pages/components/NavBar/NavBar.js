import { Link } from "react-router-dom";
import * as userService from '../../../utilities/users-service'

export default function NavBar({ user, setUser }) {

	function handleLogOut () {
		// we should delgate the actual logging out to the users service
		userService.logOut()
		setUser(null)
	}

	return (
		<>
		<nav className="navbar bg-dark fluid py-3">
			<Link className="nav-link text-white" to='/create'>Create Thread</Link>
            <Link className="nav-link text-white" to='/global'>Global Page</Link>
			<Link className="nav-link text-white" to="" onClick={handleLogOut}>Log Out</Link>
		</nav>
		<>
		<span className="mt-3">Welcome, { user.name }</span>
		</>
		</>
	)
}
