import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <>
            <div className="navbar header-menu-bar">
                <div className="container mx-auto">
                    <div className="flex-1">
                        <Link href="/" className="btn btn-ghost text-xl">B&K Garage</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link className='px-4 text-lg' href="/">Home</Link></li>
                            <li><Link className='px-4 text-lg' href="/about-us">About Us</Link></li>
                            <li><Link className='px-4 text-lg' href="/services">Services</Link></li>
                            <li><Link className='px-4 text-lg' href="/contact-us">Contact Us</Link></li>
                            <li><Link className='px-4 text-lg' href="/auth/login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="flex-none lg:hidden sm:block">
                        <button className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-5 w-5 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header