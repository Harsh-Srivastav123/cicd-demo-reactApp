
import Pragya from '../../photos/Pragya.jpg'
import Linkedin from '../../photos/Linkedin.png'
import Aastha from '../../photos/Aastha.png'
import Prashant1 from '../../photos/Prashant1.png'
import github from '../../photos/github.png'
import Shubhang from '../../photos/Shubhang.png'
import Harsh from '../../photos/Harsh.png'
import { Link } from 'react-router-dom'

const Aboutus = () => {
  return (
    <div className='bg-[#2A1B3D]'>
      <Link to="/"><div className='text-white text-2xl font-abc absolute top-[2rem] right-[4rem] h-16 w-16'>Home</div></Link>
    <div className='bg-[#2A1B3D]   '>
      <div className='text-8xl  bg-[#2A1B3D] mx-[17rem] pt-[7rem] font-abc text-[#795df1]'>Welcome to QuizMate!</div>
      <div className='text-4xl font-abc text-gray-300 mx-[10rem] pt-[4rem] text-center leading-relaxed'>At Quizmate, we&apos;re passionate about learning and having fun while doing it. Our mission is to provide an engaging platform where users can challenge themselves, expand their knowledge, and connect with others through the excitement of quizzes.</div>
      <div className='mx-[34rem] pt-[7rem] font-abc text-[#795df1] text-8xl'> Our Team</div>
      <div className='flex-col mx-[38rem] '>
    <img className=" mt-10 rounded-full w-80 h-80   object-cover border-black border-2" src={Harsh} alt="image description"/>
    <div className='mx-[4.7rem] text-gray-300 font-abc'>Harsh Raj Srivastava</div>
    <div className='mx-[4.9rem] text-gray-300 font-abc ' >Backend Developer</div>
    <div className='mx-[5.2rem] text-gray-300 '>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/harsh-srivastav123/">
        <img className='ml-7 rounded-sm w-5 h-5 object-cover ' src={Linkedin} />
        </a>
        
        <a href="https://github.com/Harsh-Srivastav123">
        <img className='ml-2 rounded-sm w-5 h-5 object-cover ' src={github} />
        </a>
      </div>
      
    </div>
    </div>
    <div className='flex '>
    <div className='flex-col mx-[16rem] '>
    <img className=" mt-10 rounded-full w-80 h-80   object-cover border-black border-2" src={Pragya} alt="image description"/>
    <div className='mx-[5.5rem] font-abc text-gray-300 '>Pragya Shrivastava</div>
    <div className='mx-[6rem] text-gray-300 font-abc ' >Web Developer</div>
    <div className='mx-[5.2rem] text-gray-300 '>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/pragya-shrivastava-30014b229/">
        <img className='ml-10 rounded-sm w-5 h-5 object-cover ' src={Linkedin} />
        </a>
        
        <a href="https://github.com/pr19gya">
        <img className='ml-2 rounded-sm w-5 h-5 object-cover ' src={github} />
        </a>
      </div>
      
    </div>
    </div>

    <div className='flex-col justify-between ml-10 '>
    <img className=" mt-10 rounded-full w-80 h-80   object-cover border-black border-2" src={Aastha} alt="image description"/>
    <div className='mx-[6.5rem] text-gray-300 font-abc '>Aastha Kesarwani</div>
    <div className='mx-[7rem] text-gray-300  font-abc' >Web Developer</div>
    <div className='mx-[6rem] text-gray-300 '>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/aastha-kesarwani-bb59b7228/">
        <img className='ml-10 rounded-sm w-5 h-5 object-cover ' src={Linkedin} />
        </a>
      
        <a href="https://github.com/Aakesarwani">
        <img className='ml-2 rounded-sm w-5 h-5 object-cover ' src={github} />
        </a>
      </div>
      
    </div>
    </div>
    </div>

    <div className='flex'>
    <div className='flex-col mx-[16rem] '>
    <img className=" mt-10 rounded-full w-80 h-80   object-cover border-black border-2" src={Shubhang} alt="image description"/>
    <div className='mx-[6rem] text-gray-300 font-abc'>Shubhang Shukla</div>
    <div className='mx-[6.5rem] text-gray-300 font-abc ' >App Developer</div>
    <div className='mx-[5.5rem] text-gray-300 '>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/shubhang-shukla-661106216/">
        <img className='ml-10 rounded-sm w-5 h-5 object-cover ' src={Linkedin} />
        </a>
        
        <a href="https://github.com/Shubhang001">
        <img className='ml-2 rounded-sm w-5 h-5 object-cover ' src={github} />
        </a>
      </div>
      
    </div>
    </div>

    <div className='flex-col justify-between ml-10'>
    <img className=" mt-10 rounded-full w-80 h-80   object-cover border-black border-2" src={Prashant1} alt="image description"/>
    <div className='mx-[7rem] text-gray-300 font-abc'>Prashant Singh</div>
    <div className='mx-[7rem] text-gray-300 font-abc ' >App Developer</div>
    <div className='mx-[6rem] text-gray-300 '>
      <div className='flex'>
        <a href="https://www.linkedin.com/in/prashant-singh-269050267/">
        <img className='ml-10 rounded-sm w-5 h-5 object-cover ' src={Linkedin} />
        </a>
        
        <a href="https://github.com/prashantSj789">
        <img className='ml-2 rounded-sm w-5 h-5 object-cover ' src={github} />
        </a>
      </div>
      
    </div>
    </div>
    </div>
      
    </div>
    <div className='bg-[#2A1B3D] mt-[5rem] font-abc text-7xl text-[#795df1] mx-[10rem] '>Join the Quizmate Community Today</div>
    <div className='text-4xl mx-[10rem] font-abc text-gray-300 text-center mt-[3rem] leading-normal pb-[7rem]'>Ready to take your knowledge to the next level? Join the Quizmate community today and start quizzing like never before. Whether you&apos;re a student, educator, or lifelong learner, there&apos;s something for everyone at Quizmate. Let&apos;s embark on this journey of discovery together!</div>
    </div>
    
  )
}

export default Aboutus
