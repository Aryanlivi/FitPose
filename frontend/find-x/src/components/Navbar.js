import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

    return (
        <nav className="bg-gray-800 h-16 w-full flex items-center justify-between px-4 fixed top-0 z-10">
            <div className="flex space-x-4">
                <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</Link>
                <Link to="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</Link>
                <Link to="/services" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Services</Link>
                <Link to="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</Link>
            </div>
            {
                !isAuthenticated && (
                    <button onClick={() => loginWithRedirect()} className="text-white hover:bg-gray-700 px-3 py-2 rounded">Login</button>
                )
            }
            {
                isAuthenticated && (
                    <button onClick={() => logout()} className="text-white hover:bg-gray-700 px-3 py-2 rounded">Logout</button>
                )

            }
        </nav>
    )
}

export default Navbar