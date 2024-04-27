import React from 'react'
import Profile from '../../../photos/Profile.jpg'


import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='h-[7rem] bg-[#2A1B3D] flex '>
      <div className='min-h-12 w-[7rem] text-5xl px-[4rem] font-ghi py-10 text-[#EDEAE5]'>QuizMate</div>
      
      {/* <div className='pl-[60rem] py-[3rem] text-2xl font-abc cursor-default text-[#EDEAE5]'>Blog</div> */}
      
      <Link to="/aboutUs"><div className='pl-[65rem] py-[3rem] cursor-pointer text-2xl font-abc  text-[#EDEAE5]'>About Us</div></Link>
      <Link to="/dashboard">
      <div className='pl-[5rem] py-10 '>
      <div className="avatar">
        
  <div className="w-12 rounded-full ring  ring-primary ring-offset-base-100 ring-offset-2">
    <img src={Profile} />
  </div>
  
</div>
      </div>
      </Link>
    </div>
    </>
  )
}

export default Navbar
