import  { useContext } from 'react';
import { SessionContext } from '../../context/Sessioncontext';

const ResultList = () => {
    const { dashboardData } = useContext(SessionContext);


    if (!dashboardData || !dashboardData.resultList || dashboardData.resultList.length === 0) {
        return <div>No results found.</div>;
    }

    return (
        <div className='bg-[#2A1B3D]  p-10 '>
            <div className='pb-10'>
            <div className='text-center text-white text-6xl pt-10  font-abc pb-10'>Result List</div>
            {dashboardData.resultList.map((result, index) => (
                <div key={index} className='border border-1 mx-[10rem]  rounded-lg p-10 my-10 text-gray-300 text-2xl font-abc mb-10'>
                    <p className='text-3xl py-3'><u><b>Quiz {index + 1}</b></u></p>
                    <p>ID: {result.id_result}</p>
                    <p>Category: {result.category}</p>
                    <p>Maximum Marks: {result.maximumMarks}</p>
                    <p>TimeStamp:{result.timeStamp}</p>
                    <p>Total Marks:{result.totalMarks}</p>
                    <p>Wrong Answer:{result.wrongAnswer}</p>
                    <p>Total Questions: {result.totalQuestion}</p>
                    <p>Total Attempted Questions: {result.totalAttemptQuestion}</p>
                    <p>Non-Attempted Questions: {result.nonAttemptQuestion}</p>
                    <p>Right Answers: {result.rightAnswer}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default ResultList;
