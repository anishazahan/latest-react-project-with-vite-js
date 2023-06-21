import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Service from './pages/Service/Service.jsx'
import Books from './pages/Books/Books.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Book1 from './pages/Contact/Books-1.jsx'
import Books2 from './pages/Contact/Books-2.jsx'
import BookDetails from './pages/Books/BookDetails.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/services',
        element: <Service></Service>
      },
      {
        path:'/books',
        element: <Books></Books>,
        loader:()=>fetch("https://api.itbook.store/1.0/new")
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path:'/contact',
        element: <Contact></Contact>,
        children:[
          {
            path:'1',
            element: <Book1></Book1>,
          },
          {
            path:'2',
            element: <Books2></Books2>
          },
        ]
      },
    ]
  },
  


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
