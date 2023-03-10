import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function GlobalPage({user}) {

	console.log(user)
	if (!user){

		return (
		<>	

		<NavLink to = '/auth'>
			<button>Sign In</button>
		</NavLink>


		<h2>log in</h2>
		</>
		)
	}
	return (
	<h2>Global Page</h2>
	)
}
