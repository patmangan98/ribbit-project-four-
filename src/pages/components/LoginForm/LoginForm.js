import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import { logIn } from '../../../utilities/users-service'
import './LoginForm.css'

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const userToLogIn = await logIn(credentials)
            setUser(userToLogIn)
            redirect('/global')
        } catch {
            setError('Error Logging In')
        }
    }

    return (
        <div className='d-flex justify-content-center col'>
            {/* <div className='container-sm row'> */}
                <div className='login-form form-container'>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={credentials.email}
                                    onChange={handleChange}
                                    required
                                />
                                <label className='form-label'>Email</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='form-floating'>
                                <input
                                    className='form-control'
                                    type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={credentials.password}
                                    onChange={handleChange}
                                    required
                                />
                                <label className='form-label'>Password</label>
                            </div>
                        </div>
                        
                        <button 
                        className="btn btn-success mx-3 my-2"
                        type='submit'>Log In</button> 
                       
                    </form>
                    <p className='error-message' >{error}</p>
                </div>
            {/* </div> */}
        </div>
    )
}