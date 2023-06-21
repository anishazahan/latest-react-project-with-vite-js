import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {



  return (
    <>
    

<div className=" max-w-7xl px-5 mx-auto">
	<nav className="relative px-4 py-4 flex justify-between items-center bg-white">
		<a className="text-3xl font-bold leading-none" href="#">
			<h2>logo</h2>
		</a>
		
		<ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">

			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
			
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">About Us</a></li>
			
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Service</a></li>
			
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
		
			<li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
		</ul>


		<div className="">
		<a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
		<a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
		</div>


		<div className="lg:hidden drawer ">
		
			<div className="flex ml-auto justify-end">
			<button htmlFor="my-drawer" className="drawer-button flex items-end text-black-600 p-3">
				
				hellow
			</button>
			</div>
		</div>

	</nav>


	{/* // for mobile */}

  

   <div className="drawer-side navbar-menu relative z-50 lg:hidden">
	<label htmlFor="my-drawer" className="drawer-overlay"></label>
		<div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
		<MobileMenu></MobileMenu>
	</div>



</div>





    </>
  )
}

export default Navbar