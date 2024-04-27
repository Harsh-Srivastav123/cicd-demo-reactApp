
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='h-[45rem] bg-[#2A1B3D] '>
      
    <div className='pt-[4rem] text-center leading-normal text-white font-abc text-6xl'>Join the quiz craze with </div>
    <div className='pt-0  leading-normal text-[#795df1] text-center font-abc text-9xl '>QuizMate</div>
    <div className='pt-[0.7rem] leading-normal text-center text-white font-abc text-5xl '>Take quizzes or craft your own custom challenges!</div>
      <div className='pl-[43rem] pt-[2rem] '>
        
      <Link to="/signup">
         <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
            Sign In!
            </span>
          </button> 
      </Link>    
      </div>
    </div>
  )
}

export default Banner
