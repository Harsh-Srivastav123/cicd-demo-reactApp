import  { useState } from 'react'
import axios from "axios";
import FormData from "form-data"
// import fs from "fs"
// import Image from "./../../../public/user.jpeg"
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import {baseUrl} from "./../../baseUrl.jsx"
import { Link } from 'react-router-dom';

const Signup = () => {
    const [inputs,setInputs] = useState({
        userName:"",
        email:"",
        password:"",
    });
    const{setMessage}=useContext(AuthContext);
    const [registered,setRegistered]=useState(false);


    const handleChange = (e) =>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))   
    };

    const handleClick= async e=>{
        e.preventDefault();
        console.log(inputs)

        try{
            let data = new FormData();
            data.append('user', JSON.stringify(inputs));
            
            //data.append('image', `${Image}`);
            //data.append('user', '{\n    "userName":"Harsh-Raj-Srivfvsvdgbdgbastav-prod",\n    "email":"srivastavharsh2003@gmail.com",\n    "password":"123456789"\n}');
            console.log(data);
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: `${baseUrl}/user/createUser`,
                
                headers: { 
                    
                },
                data : data
            };

            axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                setMessage(JSON.stringify(response.data.message))
                // console.log(message)
                setRegistered(true);
                console.log(registered)

            })
            .catch((error) => {
                console.log(error);
                // setErr(error);
            });
            setRegistered(true);

        }
        catch(err){
           console.log(err)
        }
        
            
    };
    



  return (
    <div className="bg-[#2a1b3d] min-h-screen flex-col">
    <div className="flex flex-col h-screen  items-center justify-center "> 
    <div className="text-8xl text-[#795df1] font-abc">QuizMate</div>
            <div className="text-4xl text-white font-abc mt-8 mb-3">SignUp </div>
            <div className="flex my-[2.7rem]">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-[#2a1b3d] dark:text-gray-400 dark:border-white">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
            </span>
            <input type="text" id="website-admin" className="rounded-none w-[17.5rem] rounded-e-lg bg-gray-50 border text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0  text-md border-gray-300 p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" name="userName" onChange={handleChange}/>
            </div>
             
            <div className="relative mb-[0.75rem] ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
            </div>
            <input type="email"  className="bg-[#2a1b3d] border border-white text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[20rem]  ps-10 p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" name="email" onChange={handleChange}  />
            </div>
            
            <input  className="m-[2rem] w-[20rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" placeholder="Password" name="password" onChange={handleChange}/>
            
            <div className="py-[2rem]">
            <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleClick}>
            <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
            Register!
            </span>

            </button>
            
            </div>
     
      {/* {message}
      <br />
      {registered && (<button>Login</button>)} */}
      

      <Link to="/login">Already have an account?  Login</Link>
    </div>
    </div>
  )

  }
export default Signup
