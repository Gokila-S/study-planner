import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Header() {
    const { user, isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleClick() {
        if (isLoggedIn) {
            Swal.fire({
                icon: "success",
                title: "Logged out",
                text: "See you next study session!"
            });
            logout();
        } else {
            navigate('/login');
        }
    }

    return (
        <header className='sticky top-0 p-5 min-h-[10vh] bg-white border-b-2 border-green-200 flex justify-between items-center shadow-sm z-10'>
            <div className='text-2xl font-bold text-green-700 tracking-wide'>
                <Link to="/" className='hover:text-green-500 transition'>☘️ Study Planner</Link>
            </div>
            <div className='flex items-center gap-4'>
                <div className='font-medium text-green-800'>{user && `👤 ${user}`}</div>
                <button 
                    className='bg-green-100 text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-200 transition cursor-pointer shadow-sm border border-green-200' 
                    onClick={handleClick}
                >
                    {isLoggedIn ? 'Logout' : 'Login'}
                </button>
            </div>
        </header>
    )
}