import  { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/authContext';
import { baseUrl } from '../../baseUrl';
import { Link } from 'react-router-dom';
import Addques from './Addques';
import Lottie from 'lottie-react';
import ErrorAnimation from '../../animations/Error.json';
import WaitingAnimation from '../../animations/Waiting.json';
import { useNavigate } from 'react-router-dom';
import Adduser from './Adduser';

const Conductsession = () => {
    const navigate = useNavigate();
    const { accessToken } = useContext(AuthContext);

    const [duration, setDuration] = useState('');
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [users, setUsers] = useState([]);
    const [sessionCreated, setSessionCreated] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [differenceMinutes, setDifferenceMinutes] = useState(0);

    const handleDateChange = (e) => {
        const dateValue = e.target.value;
        setSelectedDate(dateValue);
        const difference = calculateDifferenceInMinutes(dateValue);
        setDifferenceMinutes(difference);
    };

    const calculateDifferenceInMinutes = (selectedDateTime) => {
        const selectedDate = new Date(selectedDateTime);
        const currentDate = new Date();
        const differenceMs = selectedDate.getTime() - currentDate.getTime();
        const differenceMinutes = Math.round(differenceMs / (1000 * 60));
        return differenceMinutes;
    };

    const getQues = (data) => {
        setQuestions(data);
    };

    const getUser = (data) => {
        setUsers(data);
    };

    const handleCreateSession = async () => {
        try {
            const data = {
                delayDuration: differenceMinutes,
                duration,
                sessionTitle: title,
                sessionQuestionList: questions,
                sessionUserList: users
            };

            const config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            };

            const response = await axios.post(`${baseUrl}/session/createSession`, data, config);
            console.log(response.data);
            setSessionCreated(true);
        } catch (error) {
            // console.error('Error creating session:', error);
        }
    };

    useEffect(() => {
        // console.log('Questions:', questions);
        // console.log('Users:', users);
    }, [questions, users]);

    return (
        <div>
            {!accessToken ? (
                <div className='h-screen bg-[#2A1B3D]'>
                    <div className='flex justify-center'>
                        <div className='h-[30rem] w-[35rem]'>
                            <Lottie animationData={ErrorAnimation} />
                        </div>
                    </div>
                    <div className='text-white text-5xl font-abc flex mt-[5rem] justify-center'>Whoops! It seems you&apos;re not logged in. Login to conduct a session!</div>
                    <div className='flex mt-[2rem] justify-center'>
                        <Link to="/login">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-7 py-3 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">Login!</span>
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <div className='flex bg-[#2A1B3D] '>
                    <div className='bg-[#2A1B3D] flex flex-col w-[60rem]'>
                        <div className='text-[#795df1] mt-[2rem] mx-[17rem] font-abc mb-[3rem] text-6xl '>Session Details</div>
                        <div className='mx-[10rem] flex-col items-center justify-center'>
                            <div className='mb-5'>
                                <div className='text-xl text-white mx-3'>Title</div>
                                <input className="m-[0.7rem] w-[40rem] h-10 bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter Title' />
                            </div>
                            <div className='mb-5'>
                                <div className='text-xl text-white mx-3'>Set Date and Time</div>
                                <input className='m-[0.7rem] w-[40rem] h-10 bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="datetime-local" id="datetime" value={selectedDate} onChange={handleDateChange} />
                            </div>
                            <div className='mb-5'>
                                <div className='text-xl text-white mx-3'>Set Quiz Duration</div>
                                <input className='m-[0.7rem] w-[40rem] h-10 bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='Enter Duration' />
                            </div>
                        </div>
                        <div className='mx-[10rem] flex-col items-center justify-center'>
                            <div className='text-xl text-white mx-3'>Add Questions</div>
                            <Addques onSubmit={getQues} />
                        </div>
                        <div className='mx-[10rem] flex-col items-center justify-center'>
                            <div className='text-xl text-white mx-3'>Add Users</div>
                            <Adduser onSubmit={getUser} />
                        </div>
                        <div className='ml-[10rem] flex'>
                            <div className="py-[0rem] pl-[28rem]">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleCreateSession}>
                                    <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">Create Session</span>
                                </button>
                            </div>
                        </div>
                        {sessionCreated && navigate("/created")}
                    </div>
                    <div className='w-[30rem] my-[10rem]'>
                        <Lottie animationData={WaitingAnimation} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Conductsession;
