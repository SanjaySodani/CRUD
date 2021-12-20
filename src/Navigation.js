import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className='navbar navbar-expand-sm bg-light navbar-light'>
            <Link to='/dashboard' className='navbar-brand'>CRUD App</Link>
            <div className='navbar-nav'>
                <Link to='/users' className='nav-item nav-link'>List Users</Link>
                <Link to='/create-user' className='nav-item nav-link'>Create User</Link>
            </div>
        </nav>
    )
}

export default Navigation
