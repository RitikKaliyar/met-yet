import React from 'react'
import profileImg from '../assets/1731180366744.jpeg'
import {Link } from 'react-router-dom'

const HeroPage = () => {
  return (
    <>
   <div className='w-full h-screen bg-sky-300 flex items-center justify-center'>
            <div className="text-center w-[50%] h-screen flex flex-col justify-center items-center">
                <h1 className="text-7xl font-bold">Ritik Kaliyar</h1>
                <p className="text-4xl">Hey, I'm a MERN Stack Developer</p>
                <div className='w-70% h-10 mt-4 felx'>
                <Link to='/skills'   >
                <div className='w-[200px] h-[25px] bg-gray-500'>
                Skills
                </div>
                </Link>
                <Link to='/project'>
                <div className='w-[200px] h-[25px] bg-gray-500'>
                Projects
                </div>
                </Link>
                </div>
                <Link to='/contact'>
                Contact
                </Link>
            </div>
            <div className="text-center w-[50%] h-screen flex flex-col justify-center items-center">
                <img 
                    src={profileImg} 
                    alt="Ritik Kaliyar"
                    className="w-90 h-80 rounded-full shadow-lg"
                />

            </div>
        </div>
    </>
  )
}

export default HeroPage