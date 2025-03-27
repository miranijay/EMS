import React, { useState } from 'react'

const Login = ({handleLogIn}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleSubmit = (e) => {
        e.preventDefault();
        handleLogIn(email, password);
        setEmail('');
        setPassword('');
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 p-28 rounded-xl">
            <form 
                className='flex flex-col items-center justify-center'
                onSubmit={HandleSubmit}
            >
                <input 
                    className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none text-xl placeholder:text-gray-400' 
                    type="email" 
                    placeholder='Enter Your Email' 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    className='border-2 border-emerald-600 rounded-full py-3 px-5 outline-none text-xl placeholder:text-gray-400 mt-3' 
                    type="password" 
                    placeholder='Enter Password' 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-emerald-600 hover:bg-emerald-700 rounded-full py-2 px-16 w-full outline-none text-xl placeholder:text-white mt-7 cursor-pointer'>
                    Log In
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login;