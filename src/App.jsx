import React from 'react'
import Header from './components/Header'
import About from './components/About'
import SparkleCursor from './components/SparkleCursor'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Error from './components/Error'
import { div } from 'framer-motion/client'
import Skills from './components/Skills'
// import { path } from 'framer-motion/client'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:(
        <>
        <Header/>
        <SparkleCursor/>
        <About/> 
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
      path:'skills',
      element:(
        <>
        <Header/>
        <Skills/>
        <SparkleCursor/>
        </>
      )
    },
    {
      path:'resume',
      element:(
        <>
          <Header/>
          <Resume/>
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
        <SparkleCursor/>
        </>
      )
    }
    
   

  ])
  return (
    <div className='invisible-scrollbar' style={{ height: "100vh", overflowY: "scroll" }}>
    <RouterProvider router={router} />
    </div>
  )
}

export default App
