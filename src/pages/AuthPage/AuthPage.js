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
			<h1 className="mt-3">ribbit</h1>
			<div>
			<Tabs
			id='login-tabs'
			activeKey={key}
			onSelect={(key) => setKey(key)}
			className='mb-3'
			>
			<Tab eventKey='sign-up' title='Sign-Up'>
            <SignUpForm setUser={setUser}/>
			</Tab>
			<Tab eventKey='login' title='Login'>
			<LoginForm setUser={setUser}/>
			</Tab>
			</Tabs>
			</div>
		</>
	)
}
