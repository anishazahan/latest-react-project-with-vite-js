import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import { Link, NavLink } from 'react-router-dom'





const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
    

<div className=" max-w-7xl px-5 mx-auto">
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
		<a className="text-3xl font-bold leading-none" href="#">
			<h2>logo</h2>
		</a>
		
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">

		<li><NavLink to='/'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold ' : 'text-sm text-gray-400 hover:text-gray-500') } >Home</NavLink></li>
			
			<li><NavLink to='/about'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold ' : 'text-sm text-gray-400 hover:text-gray-500') } >About Us</NavLink></li>
			
			<li><NavLink to='/services'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold ' : 'text-sm text-gray-400 hover:text-gray-500') } >Services</NavLink></li>
			
			<li><NavLink to='/books'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold ' : 'text-sm text-gray-400 hover:text-gray-500') } >Books</NavLink></li>
		
			<li><NavLink to='/contact'  className={({ isActive }) => (isActive ? 'text-blue-500 font-bold ' : 'text-sm text-gray-400 hover:text-gray-500') } >Contact</NavLink></li>
		</ul>


		<div className="">
		<a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
		<a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
		</div>


		<div className="lg:hidden ">
		
			<div className="flex ml-auto justify-end">
			<button  onClick={() => setIsMenuOpen(true)} htmlFor="my-drawer" className="drawer-button flex items-end text-black-600 p-3">
				
				hellow
			</button>
			</div>
		</div>

	</nav>


	{/* // for mobile */}

  
  {
	isMenuOpen && <div className=" navbar-menu relative z-50 lg:hidden">
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
			<div className="flex items-center mb-8">
				<a className="mr-auto text-3xl font-bold leading-none" href="#">
					
				</a>
				<button  onClick={() => setIsMenuOpen(false)} className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
					</li>
					<li className="mb-1">
						<a className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div className="mt-auto">
				<div className="pt-6">
					<a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
					<a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
				</div>
				<p className="my-4 text-xs text-center text-gray-400">
					<span>Copyright © 2021</span>
				</p>
			</div>
		</nav>
	</div>
  }



</div>




    </>
  )
}

export default Navbar