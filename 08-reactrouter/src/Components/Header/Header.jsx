import React from "react"
import {Link , NavLink} from 'react-router-dom'

function Header() {
    return (
        <header classname='shadow sticky top-0 z-50'>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <Link to="\">
                        <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                        className='h-12 mr-3'
                        />
                    </Link>
                    <div className='flex items-center lg:order-2'>
                        <Link 
                        to="#"
                        className='text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >
                            Log In
                        </Link>
                        <Link
                        to="#"
                        className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none'
                        >
                            Get Started
                        </Link>
                    </div>
                    <div className="hidden justify-between items-center w-full lg:w-auto lg:flex lg:order-1" id="mobile-menu-2">
                        <ul className='flex flex-col mt-4 text-medium text-center justify-between gap-x-6 font-semibold lg:flex-row lg:mt-0 lg:space-x-0'>
                            <li>
                                <NavLink to="/"
                                className={({isActive})=>
                                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                className={({isActive})=>
                                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"
                                className={({isActive})=>
                                    `block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header