 
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Session from '../../../animations/Session.json'


const Box = () => {
  return (
    <>
    <div className='text-[#795df1] bg-[#2A1B3D] px-5 font-abc text-center text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Create and Customize</div>
    <div className='bg-[#2A1B3D] h-[40rem] flex'>
    <div className='w-[40rem] pl-[7rem] pt-7'>
        <Lottie animationData={Session}/>
      </div>
      <div className='w-[70rem] px-[5rem] pt-[4rem]'>
      
      <div className="text-white text-4xl pt-[4rem] text-center font-abc px-[1rem] leading-loose">Personalize your quiz experience, challenge yourself, and expand your knowledge!</div>
      <div className='pl-[20rem] pt-[4rem] '>
        
       
      <Link to="/customquiz">
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
            Create!
            </span>
          </button></Link>
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Box
