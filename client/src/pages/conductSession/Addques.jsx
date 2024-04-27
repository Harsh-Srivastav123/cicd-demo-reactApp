import { useState } from "react";

const Addques = (props) => {
    const [questions, setQuestions] = useState([
        { 
            question: '',
            options1: '',
            options2: '',
            options3: '',
            options4: '',
            category: null, 
            rightAnswer: '',
            topic: null,
            marks: '',
            difficulty: null
        }
    ]);

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, {
            question: '',
            options1: '',
            options2: '',
            options3: '',
            options4: '',
            category: null,
            rightAnswer: '',
            topic: null,
            marks: '',
            difficulty: null
        }]);
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(questions);
    };

    return (
        <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
                <div className="mx-[0rem]  flex-col  mb-[5rem]  justify-center" key={index}>
                    <div >
                        <div className='text-md text-white mt-3 mx-3'>Question</div>
                        <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.question} onChange={(e) => handleQuestionChange(index, 'question', e.target.value)} placeholder='Enter Question' />
                     </div>
                    <div className='mx-[0rem]  flex-col    justify-center'> 
                    <div className='text-md text-white mt-3 mb-0 mx-3'>Options</div>
                        <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.options1} onChange={(e) => handleQuestionChange(index, 'options1', e.target.value)} placeholder='Option 1' />
                        <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.options2} onChange={(e) => handleQuestionChange(index, 'options2', e.target.value)} placeholder='Option 2' />
                        <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.options3} onChange={(e) => handleQuestionChange(index, 'options3', e.target.value)} placeholder='Option 3' />
                        <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.options4} onChange={(e) => handleQuestionChange(index, 'options4', e.target.value)} placeholder='Option 4' />
                    </div>
                    <div className='text-md text-white mt-3 mx-3'>Right Answer</div>
                    <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.rightAnswer} onChange={(e) => handleQuestionChange(index, 'rightAnswer', e.target.value)} placeholder='Right Answer' />
                    <div className='text-md text-white mt-3 mx-3'>Marks</div>
                    <input className='m-[0.7rem] w-[40rem] h-10  bg-[#2a1b3d] border border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" value={question.marks} onChange={(e) => handleQuestionChange(index, 'marks', e.target.value)} placeholder='Marks' />
                    
                </div>
            ))}
            <div className='flex'>
                    <div className="py-[1rem] pl-[22rem] ">
                        <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleAddQuestion}>
                        <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                        Add More
                        </span>

                    </button>
                    
                    </div>
                    <div className="py-[1rem] pl-[1rem]">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" type="submit">
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Submit
                                </span>

                                </button>
                                
                    </div>
                    </div>
            
        </form>
    );
};

export default Addques;
