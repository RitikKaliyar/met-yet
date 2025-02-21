import React from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <>
  <div className='w-full h-[100px] bg-black flex '>
    <div className='w-[40%] h-[100%] bg-amber-50'>

    </div>
    <div className='w-[60%] h-[100%] bg-amber-500 flex flex-row items-center gap-4 p-4'>
            <Link to="/" className="text-white">About Me</Link>
            <Link to="/skills" className="text-white">Skills</Link>
            <Link to="/projects" className="text-white">Projects</Link>
            <Link to="/passion" className="text-white">Passion</Link>
            <Link to="/academics" className="text-white">Academics</Link>
            <Link to="/workexp" className="text-white">Work Exp</Link>
        </div>
  </div>

    </>
  )
}

export default Navbar