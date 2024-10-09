import React from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';

function signup() {
  return (
    <div className='container'>
        <h1>Login</h1>
        <from>
            <div>
                <label htmaFor='name'>Name</label>
                <input
                    type='text'
                    name='name'
                    autoFocus
                    placeholder='Enter your name...'
                
                />
            </div>
            <div>
                <label htmaFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your email...'
                
                />
            </div>
            <div>
                <label htmaFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password...'
                
                />
            </div>
            <button>Signup</button>
            <span>Already have an account ?
                <Link to="/login">Login</Link>
            </span>
        </from>
        <ToastContainer/>
    </div>
  )
}

export default signup