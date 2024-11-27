import React from 'react';
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const activeColor = {
        color: 'white'
    }
    return (
        <div className="">
            <div className="flex justify-between mt-3 px-6 text-2xl items-center">
                <div className="flex">Flurri</div>
                <div className='flex justify-between w-1/4'>
                    <NavLink to={'/'} className="" style={({isActive}) => isActive ? activeColor : undefined}>Main</NavLink>
                    <NavLink to={'/posts'} className="" style={({isActive}) => isActive ? activeColor : undefined}>My posts</NavLink>
                    <NavLink to={'/new'} className="" style={({isActive}) => isActive ? activeColor : undefined}>Add post</NavLink>
                </div>
                <button className="flex py-2 px-4 bg-slate-500 text-white">Login</button>
            </div>
        </div>
    );
}

export default Navbar;
