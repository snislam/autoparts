import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handelSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }

    const menu = <>
        <li><Link to='/'>Home</Link> </li>
        {
            user ?
                <>
                    <li><Link to='/dashboard'>Dashboard</Link> </li>
                    <li className='bg-slate-300'><p>Hello, {user.displayName?.split(' ')[0]}</p></li>
                    <li><button onClick={handelSignOut}>Sign Out</button></li>
                </>
                :
                <li><Link to='/login'>Login</Link> </li>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-primary">AUTOPARTS</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Header;