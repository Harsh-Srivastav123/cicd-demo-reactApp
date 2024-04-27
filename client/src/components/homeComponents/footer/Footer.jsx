import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-[#2A1B3D] h-10'>
    <Link to ="/aboutUs"><div className='pl-[80rem] cursor-pointer'>For any queries - Contact Us</div></Link>
   </div>
    
  )
}

export default Footer
