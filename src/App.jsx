
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
    <Outlet></Outlet>
    <h2>footer</h2>
    </>
  )
}

export default App
