import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../redux/features/auth/authApi'

function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [loginUser, {isLoading: loginLoading}] = useLoginUserMutation();
  

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email, password};
    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      const {token, user} = response;
      alert("Login successful");
      navigate('/');
    } catch (error) {
      setMessage(error.data.message);
    }

  }


  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h2 className='text-2xl fond-semibold pt-5'>Please Login</h2>
      <form onSubmit={handleSubmit} className='space-y-5 max-w-sm mx-auto pt-8'>
        <input type="email" value={email}
        placeholder='Email'
        required
        onChange={(e) => setEmail(e.target.value)}
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        <input type="password" value={password}
        placeholder='Password'
        required
        onChange={(e) => setPassword(e.target.value)}
        className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
        />
        {
          message && <p className='text-red-500'>{message}</p>
        }

        <button 
        disabled={loginLoading}
        className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium rounded-md py-3'>Login</button>
      </form>

      <p className='my-5 text-center'>Don't have an account? <Link to="/register" className='text-red-700 italic'>Register</Link> here.</p>
    </div>
  )
}

export default Login
