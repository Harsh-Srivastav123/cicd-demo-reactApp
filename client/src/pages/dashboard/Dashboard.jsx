import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { baseUrl } from '../../baseUrl';
import { SessionContext } from '../../context/Sessioncontext';
import Lottie from 'lottie-react'
import Dash from '../../animations/Dash.json'
import Error from '../../animations/Error.json'

const Dashboard = () => {
  const { accessToken, uId } = useContext(AuthContext);
  const { dashboardData, setDashboardData } = useContext(SessionContext);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, );

  const fetchDashboardData = () => {
    // setLoading(true);
    axios.get(`${baseUrl}/user/user/${uId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'X-API-Key': '{{token}}'
      }
    })
    .then((response) => {
      setDashboardData(response.data);
      // console.log(response.data);
      // setLoading(false);
    })
    .catch((error) => {
      // setError(error);
      // setLoading(false);
      console.log(error)
    });
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
          <div className='text-white text-5xl font-abc  flex mt-[5rem] justify-center'>Whoops! It seems you&apos;re not logged in. Login to see your progress!</div>
          
          <div className='flex mt-[2rem] justify-center'><Link to="/login"> 
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                      <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                      Login!
                      </span>
              </button></Link> 
          </div>
      </div>
  </>
    
    :(
      
    <div className='h-screen bg-[#2A1B3D]'>
      <div className='flex'>
        <div className='pt-10 text-white pl-[37rem] font-abc text-7xl text-center'>Dashboard</div>
        <Link to="/"><div className='pt-[3rem] text-white pl-[30rem] font-abc text-2xl text-right'>Home</div></Link>
      </div >
      <div className='flex'>
      <div className='pl-[0rem] w-[55rem] pt-3' >
      <div className='text-center font-abc text-gray-300 text-4xl pt-[5rem]'>Hello {dashboardData.userName}, hope you&apos;re doing good!</div>
      
      <div className='text-center font-abc text-gray-300 text-4xl pt-[2rem]'>Your userID is {dashboardData.id}.</div>
      <div className='text-center font-abc text-gray-300 text-4xl pt-[2rem]'>Email :{dashboardData.email}!!</div>
      <div className='text-center font-abc text-gray-300 text-4xl pt-[2rem]'>Here are your result and session lists:</div>
      
      <Link to="/resultlist"><div className='flex mt-[3rem] justify-center'> 
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                    Result List
                                    </span>
                            </button>
                        </div></Link>
      <Link to="/sessionlist"><div className='flex mt-[1.5rem] justify-center'> 
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                    Session List
                                    </span>
                            </button>
                        </div></Link>
    </div>
    <div className='h-[20rem] w-[35rem] pl-[5rem]' >
      <Lottie animationData={Dash}/>
    </div>
    </div>
    </div>
    
)}
</>
  );
};

export default Dashboard;
