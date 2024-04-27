
import coding from '../../../photos/coding.webp';
import difficulty from '../../../photos/difficulty.webp'
import duration from '../../../photos/duration.png'
import leaderboard from '../../../photos/leaderboard.webp'
import QUE from '../../../photos/QUE.jpg'
import review from '../../../photos/review.gif'

const Features = () => {
  return (
    <div className='bg-[#2A1B3D]' >
      <div className='pt-[0rem] pb-7 text-center leading-normal text-[#795df1] font-abc text-7xl'>Features</div>
      
      <div className=" flex flex-row text-gray-300 text-center text-md font-abc">

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl shadow-custom hover:shadow-lg">
            <img className='pb-5' src={coding} alt="" />
           <b> <span>Coding Language Selection</span></b>
            <p>Users choose programming language preferences for coding-related quizzes.</p>
        </div>

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl">
            <img className='pb-5' src={QUE} alt="" />
           <b> <span>Number of Questions Selection</span></b>
            <p>Customize quiz length by selecting the desired number of questions.</p>
        </div>

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl">
            <img className='pb-5' src={duration} alt="" />
           <b> <span>Fixed Duration</span></b>
            <p>Set a specific time limit for completing each quiz.</p>
        </div>

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl">
            <img className='pb-5' src={difficulty} alt="" />
           <b> <span>Difficulty Level Selection:</span></b>
            <p>Adjust the complexity of the quiz with options like easy, medium, or hard.</p>
        </div>

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl ">
            <img className='pb-5' src={review} alt="" />
            <b><span >Review Mode</span></b>
            <p>Access a comprehensive review mode to analyze correct and incorrect answers post-quiz.</p>
        </div>

        <div className="w-[15rem] h-[24rem] p-3 m-2 border-2 border-[#795df1] rounded-3xl">
            <img className='pb-5' src={leaderboard} alt="" />
            <b><span>Interactive Leaderboards</span></b>
            <p>Compete with peers on interactive leaderboards for a dynamic and engaging experience.</p>
        </div>

      </div>
    </div>
  )
}

export default Features
