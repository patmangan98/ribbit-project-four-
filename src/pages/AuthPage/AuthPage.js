import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from '../components/LoginForm/LoginForm'
import './AuthPage.css'
import Tab from 'react-bootstrap/Tabs'
import Tabs from 'react-bootstrap/Tabs'
import React, {useState} from 'react'

export default function AuthPage({ setUser }) {
	
	const [key, setKey] = useState('sign-up')

	return (
		<>
			<div className="container-sm w-25 mt-5">
			<Tabs
			id='login-tabs'
			activeKey={key}
			onSelect={(key) => setKey(key)}
			className='mb-3'
			>
			<Tab eventKey='sign-up' title='Sign-Up'>
            <SignUpForm setUser={setUser}/>
			</Tab>
			<Tab eventKey='login' title='Hop-in'>
			<LoginForm setUser={setUser}/>
			</Tab>
			</Tabs>
			</div>
		</>
	)
}
