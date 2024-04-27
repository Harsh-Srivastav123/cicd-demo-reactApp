import { useContext,useEffect,useState } from "react"
import { SessionContext } from "../../context/Sessioncontext"
// import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../../context/authContext"
import { baseUrl } from "../../baseUrl"
import axios from 'axios'
import Submit from '../../animations/Submit.json'
import Lottie from "lottie-react"
import { Link } from "react-router-dom"
// import Timer from "./Timer"

const Sessionquiz = () => {
  
  const {accessToken}=useContext(AuthContext)
  const {sessionQList,sessionId,result,setResult,setSessionQlist, sessionUserId}=useContext(SessionContext);
  
  const end=sessionQList.length-1;
  const [current,setCurrent]=useState(0);
  const [rightAns,setRightAns]=useState("");
  const [response, setResponse] = useState({
    responseList: [],
    sessionId:sessionId,
    sessionUserId:sessionUserId
  });

  function changeHandler(event){
    
    setRightAns(event.target.value);
    //console.log(rightAns);
  }

  const handleNextClick = () => {
    setCurrent(current + 1);
    setRightAns("");
  };

  
  const handlePreviousClick = () => {
    setCurrent(current - 1);
  };

  const handleSubmitNext = () => {
    
    var newObj = {
      id: sessionQList[current].id,
      rightOption: rightAns
    };
    const existingEntryIndex = response.responseList.findIndex(entry => entry.id === newObj.id);
    if (existingEntryIndex !== -1) {
      response.responseList[existingEntryIndex].rightOption = newObj.rightOption;
    } else {
      setResponse(prevState => ({
        ...prevState,
        responseList: [...prevState.responseList, newObj]
      }));
      
    }
    setRightAns("");
    if(current<end)
    {
      //setCurrent(current+1);
    }
    setCurrent(current+1);
  };
  const getResultHandler =() =>{
    let resultUrl=`${baseUrl}/session/sessionResponse`;
    
    // console.log(userCredential);
    

    // console.log(`Bearer ${accessToken}`);
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: resultUrl,
      headers: { 
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json', 
        'X-API-Key': '{{token}}'
      },
      data : response
    };
    //console.log(accessToken);

    axios.request(config)
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            
            setResult(response.data);
            // console.log("done");
            //navigate("");

            //Reset all custom context data
            setSessionQlist([]);
          }
          else {
            try{
              // console.log(userCredential);
              
              getResultHandler();
            }catch(error)
            {
              console.log(error);
            }
            
          }

        })
        .catch((error) => {
            console.log(error);
        });
         
        
  }
  useEffect(()=>{
    // console.log("result is ",result)
  },[result])
  useEffect(()=>{
    // console.log(response);
  },[response,rightAns]);
  

  

  

  
  return (
    <>
    
      {(current<=end)?
      <div className="bg-[#2A1B3D]  flex-col flex items-center justify-center">
        <div className='question text-3xl text-white font-abc pb-2 flex items-center justify-center border-2  border-purple-600  h-[10rem] w-[50rem] text-center rounded-lg mt-[3rem] mb-[1rem] '>
          {sessionQList[current].question}
        </div>

        <div className='options'>

          <div className='option1 text-center text-white text-2xl font-abc pb-0 border border-1 h-[4rem] w-[35rem] mb-[1rem] rounded-lg flex items-center justify-center'>
            <input 
            type="radio"
            onClick={changeHandler}
            //onChange={changeHandler}
            name="option"
            value={1}
            id='option1' />
            <label htmlFor="option1">  {sessionQList[current].options1}</label>
          </div>
        
          <div className='option2 text-center text-white text-2xl font-abc pb-0 flex items-center justify-center border border-1 h-[4rem] w-[35rem] mb-[1rem] rounded-lg'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={2}
            id="option2"/>
            <label htmlFor="option2">  {sessionQList[current].options2}</label>
          </div>

          <div className='option3 text-center text-white text-2xl font-abc pb-0 flex items-center justify-center border border-1 h-[4rem] w-[35rem] mb-[1rem] rounded-lg'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={3}
            id="option3"/>
            <label htmlFor="option3">  {sessionQList[current].options3}</label>
          </div>

          <div className='option4 text-center text-white text-2xl font-abc pb-0 flex items-center justify-center border border-1 h-[4rem] w-[35rem] mb-[1rem] rounded-lg'>
            <input
            type="radio"
            onClick={changeHandler}
            name="option"
            value={4}
            id="option4"/>
            <label htmlFor="option4">  {sessionQList[current].options4}</label>
          </div>

        </div>
        <br />
        <div className="flex space-x-[45rem]">
        {(current>0)?<div className='ml-[0rem] flex'>
                    <div className="py-[0.5rem] pl-[0rem] pb-1">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handlePreviousClick}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Previous
                                </span>

                                </button>
                                
                    </div>
                    
                    </div>:""}
          {/* {(current>0)?<button className="" onClick={handlePreviousClick}>Previous</button>:""} */}
          {(current<(end))?<div className='ml-[0rem] flex'>
                    <div className="py-[0.5rem] pl-[0rem] pb-1">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleNextClick}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Next
                                </span>

                                </button>
                                
                    </div>
                    
                    </div>:""}
          {/* {(current<(end))?<button onClick={handleNextClick}>Next</button>:""} */}
        </div>
        <br />
        <div>
        <div className='ml-[0rem] flex'>
                    <div className="">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleSubmitNext}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Submit and Next
                                </span>

                                </button>
                                
                    </div>
                    
                    </div>
          {/* <button onClick={handleSubmitNext}>Submit and Next</button> */}
        </div>
    </div>
    :
    <div className="bg-[#2A1B3D] h-screen">
      
      <div className='h-screen bg-[#2A1B3D]'>
    <div className='  flex  justify-center'>
        <div className='h-[30rem] w-[35rem] '>
        <Lottie animationData={Submit}/>
        </div>
    
    </div>
    <div className='flex mt-[2rem] justify-center'><Link to="/"> 
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={getResultHandler}>
                <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                Submit the Quiz
                </span>
        </button></Link> 
    </div>
      </div>
      {/* <div className='ml-[0rem] flex'>
                    <div className="">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={getResultHandler}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Submit the Quiz
                                </span>

                                </button>
                                
                    </div>
                    
                    </div> */}
    {/* <button onClick={getResultHandler}>Submit the quiz</button>  */}
    </div>}
    
    
    
    </>
    
  )
}

export default Sessionquiz