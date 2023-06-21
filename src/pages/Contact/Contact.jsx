import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div className="max-w-7xl mx-auto px-5 flex justify-between">
     <div className="left">
      <Link to='1'>book-1</Link>
      <div className="">
        <Link to='2'>book-2</Link>
      </div>
     </div>
     <div className="right bg-gray-300 w-full">
       <Outlet></Outlet>
     </div>

    </div>

    </>
  )
}

export default Contact