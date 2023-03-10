import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function GlobalPage({user}) {

	console.log(user)
	if (!user){

		return (
		<>	

		<Link to = '/auth'>
			<button>Sign In</button>
		</Link>


		<h2>log in</h2>
		</>
		)
	}
	return (
	<h2>Global Page</h2>
	)
}
