import React from 'react';
import {NavLink, Link} from 'react-router-dom'
const Navbar = () => {
    const isAuth = true
    const activeColor = {
        color: 'white'
    }
    return (
        <div className="">
            <div className="flex justify-between mt-3 px-6 text-2xl items-center bg-slate-400">
                <div className="flex">Flurri</div>
                {
                    isAuth ? <div className='flex justify-between w-1/4'>
                    <NavLink to={'/'} className="" style={({isActive}) => isActive ? activeColor : undefined}>Main</NavLink>
                    {/* <NavLink to={'/posts'} className="" style={({isActive}) => isActive ? activeColor : undefined}>My posts</NavLink> */}
                    <NavLink to={'/new'} className="" style={({isActive}) => isActive ? activeColor : undefined}>Add post</NavLink>
                </div> : undefined
                }
                {
                    isAuth ? <button className="flex py-2 px-4 bg-slate-500 text-white">Log out</button> : <Link to='/login' className="flex py-2 px-4 bg-slate-500 text-white">Log in</Link>
                }
            </div>
        </div>
    );
}

export default Navbar;
