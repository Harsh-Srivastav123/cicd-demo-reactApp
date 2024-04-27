
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import Question from '../../../animations/Question.json'

const Quespaper = () => {
  return (
    <>
    <div className='text-[#795df1] bg-[#2A1B3D] text-center font-abc  text-8xl animate-fade-down animate-once animate-duration-1000 animate-delay-1000'>Explore Our Questions</div>
    <div className='h-[40rem] bg-[#2A1B3D] flex'>
    <div className='w-[30rem] pt-10 px-[5rem]'>
        <Lottie animationData={Question}/>
      </div>
      <div className='w-[60rem] px-10 pl-0'>
      <div className=' pt-[6.5rem] text-abc text-4xl text-white text-center px-[1rem] leading-loose'>Dive into our extensive database and explore a wide range of thought-provoking questions!</div>
      <div className='pl-[23rem] pt-[4rem] '>
        
      <Link to="/questionPaper"> 
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
            Explore!
            </span>
      </button></Link>     
      </div>
      </div>
    </div>
    </>
  )
}

export default Quespaper