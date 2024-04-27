import  { useContext, useEffect, useState } from 'react';
import { SessionContext } from '../../context/Sessioncontext';

const Sessionlist = () => {
    const { dashboardData } = useContext(SessionContext);
    const [sortedSessions, setSortedSessions] = useState([]);

    useEffect(() => {
        if (dashboardData && dashboardData.sessionList && dashboardData.sessionList.length > 0) {
            
            const sortedData = dashboardData.sessionList.slice().sort((a, b) => {
                const dateA = new Date(a.dateAndTime).getTime();
                const dateB = new Date(b.dateAndTime).getTime();
                return dateB - dateA; 
            });
            setSortedSessions(sortedData);
        }
    }, [dashboardData]); 

    if (!sortedSessions || sortedSessions.length === 0) {
        return <div>No results found.</div>;
    }

    return (
        <div className='bg-[#2A1B3D]'>
            <div className='pb-10'>
            <div className='text-center text-white text-6xl pt-10 font-abc pb-10'>Session List</div>
            {sortedSessions.map((result, index) => (
                <>
                <div key={index} className='border border-1 mx-[10rem] rounded-lg p-10 my-10 text-gray-300 text-2xl font-abc'>
                    <p className='text-3xl py-3'><u><b>Quiz {index + 1}</b></u></p>
                    <p>Date and Time: {result.dateAndTime}</p>
                    <p>Delay Duration: {result.delayDuration}</p>
                    <p>Duration: {result.duration}</p>
                    <p>Expiry Time Stamp: {result.expiryTimeStamp}</p>
                    <p>Session ID: {result.sessionId}</p>
                    <p>Session Title: {result.sessionTitle}</p>
                    <p>Session Start TimeStamp: {result.startTimeStamp}</p>
                    {result.sessionUserList.map((listres, nidx)=>(
                        <div key={nidx}>
                            <p>User Rank : {listres.sessionRank}</p>
                            <p>Marks Scored : {listres.marks}</p>
                        </div>
                    ) )}
                    <p>Question List:</p>
                    {result.sessionQuestionList.map((newres, newindex) => (
                        <div key={newindex} className='px-10 py-3 '>
                            <p>Question {newindex+1}:</p>
                            
                            <p>Question ID: {newres.id}</p>
                            <p>Marks: {newres.marks}</p>
                            <p>Question: {newres.question}</p>
                            <p>Option 1 :{newres.options1}</p>
                            <p>Option 2 :{newres.options2}</p>
                            <p>Option 3 :{newres.options3}</p>
                            <p>Option 4 :{newres.options4}</p>
                            <p>Right Answer: {newres.rightAnswer}</p>
                            <p>Right Option: {newres.rightOption}</p>
                            
                        </div>
                    ))}
                </div>
                
                </>
            ))}
            </div>
        </div>
    );
};

export default Sessionlist;
