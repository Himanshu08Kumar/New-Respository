import React from 'react'
import Header from './components/Header'
import About from './components/About'
import SparkleCursor from './components/SparkleCursor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects'
import Error from './components/Error'
// import { path } from 'framer-motion/client'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:(
        <>
        <Header/>
        <About/>
        <SparkleCursor/>
        </>
      )
    },
    {
      path: '/projects',
      element:(
        <>
        <Header/>
        <Projects/>
        <SparkleCursor/>
        </>
      )
    },
    {
      path: '*',
      element:(
        <>
        <Header/>
        <Error/>
        </>
      )
    }
    
   

  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
