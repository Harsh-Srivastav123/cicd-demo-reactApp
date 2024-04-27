import { useContext, useEffect } from 'react'
import {baseUrl} from "../../baseUrl.jsx"
import axios from 'axios';
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';

const QuestionPaper = () => {

    const {  setQuestionInfo , setTotalQ,setChosenCategory ,totalMarks,setTotalMarks} = useContext(CustomContext);
    const navigate = useNavigate();


    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${baseUrl}/question/questionPaper`,
            headers: { 
              'X-API-Key': '{{token}}'
            }
          };
          
          axios.request(config)
          .then((response) => {
            //console.log(JSON.stringify(response.data));
            const ques=response.data;
            setQuestionInfo(ques.questionList);
            setChosenCategory(ques.category);
            setTotalQ(ques.totalQuestion);
            let maxMarks = 0;
            ques.questionList.forEach(question => {
                maxMarks += parseInt(question.marks);
            });
            setTotalMarks(maxMarks);

          })
          .catch((error) => {
            console.log(error);
          });
    },)
    useEffect(()=>{
        // console.log(questionInfo);
        // console.log(chosenCategory);
        // console.log(totalQ);
        // console.log(totalMarks);
    },[totalMarks])
    function clickHandler(event){
        event.preventDefault();
        navigate("/quiz");

    }
    
  return (
    <div className='bg-[#2A1B3D] h-screen'>
      <div>
        <div className='text-center text-white text-7xl pt-10 font-abc pb-10'>Quiz Guidelines</div>
        <div className='text-3xl text-center text-gray-300 font-abc leading-relaxed pt-10'> 
        <ul>
        <li>You will encounter questions of different difficulty levels: easy, medium, and hard.</li>
        <li>To start the quiz, press the &quot;Begin Quiz&quot; button.</li>
        <li>You will be presented with 12 random questions from our pool.</li>
        <li>Once you&apos;ve chosen your answer, press the &quot;Submit and Next&quot; button to proceed to the next question.</li>
        <li>You can go back to previous questions and change your answer.</li>
        <li>Your score will be calculated based on correct answers and difficulty levels.</li>
        <li>At the end of the quiz, you&apos;ll see your total score and have the option to review your answers.</li>
        <li>Enjoy the challenge, and good luck! 🍀</li>
        </ul>
        </div>
      </div>
      <br />
      <div className='text-center'>
      <div className="py-[1rem] ">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={clickHandler}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Begin Quiz
                                </span>

                                </button>
                                
                    </div>
        
      </div>
    </div>
  )
}

export default QuestionPaper
