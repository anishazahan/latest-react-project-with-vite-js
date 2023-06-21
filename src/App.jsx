
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
    <div  className='min-h-[calc(100vh-110px)]'>
    <Outlet></Outlet>
    </div>
  <div className="bg-gray-800 mx-auto py-5">
  <h2 className='text-white text-center font-bold'>footer</h2>
  </div>
    </>
  )
}

export default App
