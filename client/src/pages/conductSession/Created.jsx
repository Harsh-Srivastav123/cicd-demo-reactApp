import React from 'react'
import Lottie from 'lottie-react'
import Good from '../../animations/Good.json'
import { Link } from 'react-router-dom'

const Created = () => {
  return (
    <div className='h-screen bg-[#2A1B3D]'>
    <div className='  flex  justify-center'>
        <div className='h-[30rem] w-[35rem] '>
        <Lottie animationData={Good}/>
        </div>
    
    </div>
    <div className='text-white text-5xl font-abc  flex mt-[5rem] justify-center'>Session Created Successfully!!</div>
    
    <div className='flex mt-[2rem] justify-center'><Link to="/"> 
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                Go To Home
                </span>
        </button></Link> 
    </div>
</div>
  )
}

export default Created