import React from 'react';
import {Link} from 'react-router-dom'

const LoginPage = () => {
    return (
        <div>
            <form className="text-2xl bg-slate-500 flex flex-col p-6 w-1/3 mt-40 mx-auto">
                <h1 className="text-center mb-4">Autorization</h1>
                <label className=" text-gray-400  mb-2">Username:</label>
                <input type="text"  placeholder='Username'className='rounded-lg bg-gray-400 placeholder:text-gray-300 mb-4 p-2'/>
                <label className=" text-gray-400 mb-2">Password:</label>
                <input type="password"  placeholder='Password'className='rounded-lg bg-gray-400 placeholder:text-gray-300 mb-8 p-2'/>
                <div className="flex justify-between items-center">
                    <button className='py-2 px-4 bg-slate-600'>Login</button>
                    <Link to={'/register'}>Don't have an account?</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
