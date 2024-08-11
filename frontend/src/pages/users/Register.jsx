import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')

  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h2 className='text-2xl fond-semibold pt-5'>Please Register</h2>
      <form className='space-y-5 max-w-sm mx-auto pt-8'>
        <input type="text" value={username}
        placeholder='Username'
        required
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        <input type="email" value={email}
        placeholder='Email'
        required
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        <input type="password" value={password}
        placeholder='Password'
        required
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        {
          message && <p className='text-red-500'>{message}</p>
        }

        <button className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium rounded-md py-3'>Register</button>
      </form>

      <p className='my-5 text-center'>Already have an account? <Link to="/login" className='text-red-700 italic'>Login</Link> here.</p>
    </div>
  )
}

export default Register
