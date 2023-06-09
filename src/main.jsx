import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'
import BookDetails from './components/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books />,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/bookdetails/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
      
    ]
  }  
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}></RouterProvider>)
