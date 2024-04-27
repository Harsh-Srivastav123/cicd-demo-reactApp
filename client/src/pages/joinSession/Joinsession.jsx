import  {  useContext, useEffect } from 'react';
import axios from 'axios';
import { SessionContext } from '../../context/Sessioncontext';
import {AuthContext} from '../../context/authContext'
import { baseUrl } from '../../baseUrl';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react'
import Error from '../../animations/Error.json'
//import Lottie from 'lottie-react';
import Start from '../../animations/Start.json'

const Joinsession = () => {
  const navigate=useNavigate()
  
  
  const { accessToken } = useContext( AuthContext);
  // const [start, setStart] = useState(false);
  const { setTimeDuration,  setDate, sessionId,setSessionId,sessionTitle,setSessionTitle,sessionQList,setSessionQList, sessionUserId, setSessionUserId}=useContext(SessionContext);
  
  

  const joinSession = () => {
    
    
    const config = {
      method: 'get',
      url: `${baseUrl}/session/session/${sessionId}`,
      headers: { 
        'Authorization': `Bearer ${accessToken}`, 
        'X-API-Key': '{{token}}'
      }
    };
    
    axios.request(config)
   
    .then((response) => {
      if (response.status==200) {
        // console.log("Session data:", response.data);
        const sessionData = response.data;
        setSessionTitle(sessionData.sessionTitle);
        setSessionQList(sessionData.sessionQuestionList);
        setDate(sessionData.dateAndTime);
        // console.log(date);
        setTimeDuration(sessionData.duration);
        // console.log(timeDuration);
        // setStart(true);
        navigate("/sessionQuiz");
      }
      
    })
    .catch((error)=>{
      console.log(error);
    })


      
  };
  useEffect(()=>{
    // console.log("Title",sessionTitle);
    // console.log("Qlist is",sessionQList);
  },[sessionQList,sessionTitle])

  const handleSessionIdChange = (e) => {
    setSessionId(e.target.value);
  };

  const handleSessionUserIdChange = (e) => {
    setSessionUserId(e.target.value);
  };

  return (
    <>
    {!accessToken ? 
      <>
          <div className='h-screen bg-[#2A1B3D]'>
              <div className='  flex  justify-center'>
                  <div className='h-[30rem] w-[30rem] '>
                  <Lottie animationData={Error}/>
                  </div>
              
              </div> 
              <div className='text-white text-5xl font-abc  flex mt-[5rem] justify-center'>Whoops! It seems you&apos;re not logged in. Login to join a quiz session!</div>
              
              <div className='flex mt-[2rem] justify-center'><Link to="/login"> 
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                          <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                          Login!
                          </span>
                  </button></Link> 
              </div>
          </div>
      </>
   : (
        <div className='bg-[#2A1B3D] h-screen flex'>
          <div className='w-[40rem]'>
          <div className='text-7xl text-white py-[5rem] mx-[12rem] font-abc w-[40rem]'>Session Details</div>
          <div className=' w-[28rem] ml-[13rem]'>
          <div className='mb-5 pt-8 pl-8'>
                            <div className='text-xl text-white mx-[2rem]'>Session ID</div>
                            <input  className="mx-[2rem] w-[20rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="number"
            value={sessionId}
            onChange={handleSessionIdChange}
            placeholder="Enter Session ID"/>
                            
                        </div>
          {/* <input
            type="number"
            value={sessionId}
            onChange={handleSessionIdChange}
            placeholder="Enter Session ID"
          /> */}
          <div className='mb-5 pt-3 pl-8'>
                            <div className='text-xl text-white mx-[2rem]'>Session User ID</div>
                            <input  className="mx-[2rem] w-[20rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text"
            value={sessionUserId}
            onChange={handleSessionUserIdChange}
            placeholder="Enter Session User ID"/>
                            
                        </div>

          {/* <input
            type="number"
            value={sessionUserId}
            onChange={handleSessionUserIdChange}
            placeholder="Enter Session User ID"
          /> */}
          
          <div className='ml-[0rem] flex'>
                    <div className="py-[1.9rem] pl-[9rem] pb-10">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={joinSession}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Join Session
                                </span>

                                </button>
                                
                    </div>
                    
                    </div>
            {/* <button onClick={joinSession} >
            Join Session
          </button> */}
          </div>
          
          
        </div>
        <div className='pl-[12rem] ml-0 mt-[4rem] w-[40rem]'><Lottie animationData={Start}/></div>
        </div>
        
   )}
    </>
)
};


export default Joinsession