import { Link } from "react-router-dom";
import {useState} from "react"
import * as userService from '../../../utilities/users-service'
import './NavBar.css'
import {
	MDBContainer,
	MDBCollapse,
	MDBNavbar,
	MDBNavbarToggler,
	MDBIcon,
	MDBBtn,
  } from 'mdb-react-ui-kit'

export default function NavBar({ user, setUser }) {

	const [navMenu, setNavMenu] = useState(false)

	function handleLogOut() {
		// we should delgate the actual logging out to the users service
		userService.logOut()
		setUser(null)
	}

	return (
		<>
			<nav className="navbar bg-dark fluid py-2 d-flex">
				<div className="nav-link " id="logo-name">ribbit</div>
				<div className="menu-container justify-content-end">
				<div className="navbar-menu">
						<button
							type="button"
							class="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							id="collapse"
							onClick={() => setNavMenu((prevState) => !prevState)}
						>
							<i className="bi bi-list"></i>
						</button>
					</div>
				</div>
				<Link className="nav-link text-white" to='/mythreads'>My Threads</Link>
				<Link className="nav-link text-white" to='/global'>Global Page</Link>
				<Link className="nav-link text-white" to="" onClick={handleLogOut}>Log Out</Link>
			</nav>
			<>
				<span className="mt-3">Welcome, {user.name}</span>
			</>
		</>
	)
}
