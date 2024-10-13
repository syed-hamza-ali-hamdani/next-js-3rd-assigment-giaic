import React from 'react'

export const login = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <form className='bg-white p-6 rounded-lg shadow-md w-96'>
            <h2 className='text-2xl font-semibold text-center mb-4'>Log in</h2>

            <div className='mb-4'>
                <label className='block text-sm font-medium mb-1' htmlFor="email">Email or Number</label>
                <input 
                type="email"
                id='email'
                placeholder='Enter your Email or Number'
                className='border border-gray-300 p-2 w-full rounded' required 
                />
            </div>

           <div className='mb-4'>
            <label className='block text-sm font-medium mb-1' htmlFor="password">Password</label>
            <input type="password"
            id='password'
            placeholder='Enter Your Password'
            className='border border-gray-300 p-2 w-full rounded'
            required />
            </div> 
           
           <button
           type='submit'
           className='bg-blue-500 text-white p-2 rounded w-full
           hover:bg-blue-600 transition duration-200'>
          Log In
           </button>
           <p className='mt-4 text-center'>
            Don't have an account ?
            <a href="/sign-up" className='text-blue-500 hover:underline'>Sign Up</a>
           </p>
        </form>
    </div>
  );
};

export default login;
