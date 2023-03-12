import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from '../components/LoginForm/LoginForm'
import './AuthPage.css'

export default function AuthPage({ setUser }) {
	return (
		<>
			<h1>ribbit</h1>
            <SignUpForm setUser={setUser} />
			<LoginForm setUser={setUser} />
		</>
	)
}
