import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Join from '../../../animations/Join.json'


const SessionCorner = () => {
  return (
    <>
    <div className='text-[#795df1] bg-[#2A1B3D] pt-[1rem] text-center font-abc  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Join a Session!</div>
    <div className='h-[45rem] bg-[#2A1B3D] flex'>
    <div className='w-[55rem] '>
      <div className=' pt-[6rem] text-abc text-4xl text-white text-center px-[3rem] leading-loose'>Step into the spotlight of knowledge-sharing and excitement by joining a quiz session with QuizMate – where curiosity meets camaraderie!</div>
      <div className='pl-[22rem] pt-[4rem] '>
        
      <Link to="/joinSession"> <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
            Join!
            </span>
          </button> </Link>     
      </div>
      </div>
      <div className='w-[45rem] px-5 pt-[4rem]'>
        <Lottie animationData={Join}/>
      </div>
    </div> 
    </>
  )
}

export default SessionCorner
