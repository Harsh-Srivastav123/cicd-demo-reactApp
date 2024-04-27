import  { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { baseUrl } from "../../baseUrl.jsx";
import { CustomContext } from '../../context/customQuizContext.jsx';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext.jsx';
import Lottie from 'lottie-react';
import Join from '../../animations/Join.json'

const QuestionParam = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ category: "all", number: 0, difficulty: "all" });
  const [totalques, setTotalques] = useState(0);
  const {  setQuestionInfo ,setTotalQ,setChosenCategory ,totalMarks,setTotalMarks} = useContext(CustomContext);
  const navigate = useNavigate();
  const {accessToken,userCredential}=useContext(AuthContext);

  let categorylist=[];
  // let ques={};
  console.log(accessToken);
  console.log(userCredential);
  function updateTotalQuestion() {
    
    for (let i = 0; i < categorylist.length; i++) {
        
        if (categorylist[i].category == formData.category) {
            
            switch (formData.difficulty) {
                case 'easy':
                    setTotalques(categorylist[i].easyQuestion);
                    break;
                case 'medium':
                    setTotalques(categorylist[i].mediumQuestion);
                    break;
                case 'hard':
                    setTotalques(categorylist[i].hardQuestion);
                    break;
                case 'all':
                    setTotalques(categorylist[i].totalQuestion);
                    break;
                default:
                    console.log('Invalid difficulty level');
                    return;
            }
            
            return;
        }
    }
    if(formData.category=='all')
    {
        setTotalques(0);
        let que=0;
        for (let i=0;i< categorylist.length; i++)
        { 
          switch(formData.difficulty){
            case 'easy':
              que=que+categorylist[i].easyQuestion;
              break;
            case 'medium':
              que=que+categorylist[i].mediumQuestion;
              break;
            case 'hard':
              que=que+categorylist[i].hardQuestion;
              break;
            case 'all':
              que=que+categorylist[i].totalQuestion;
              break;
            default:
              console.log('Invalid difficulty level');
              return;
          }
        }
        setTotalques(que);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/question/category/all`);
        // console.log(response.data);
        const categoryData = response.data.map(item => item.category);
        setCategories(categoryData);
        categorylist = response.data;
        updateTotalQuestion();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formData.difficulty,formData.category]);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    //console.log(formData);
    updateTotalQuestion();
  }

  function submitHandler(event) {
    event.preventDefault();
    const quesUrl =`${baseUrl}/question?pageNo=0&pageSize=${formData.number}&category=${formData.category}&difficulty=${formData.difficulty}`;
    axios.get(quesUrl)
      .then((response) => {
        // console.log(response.data);
        const ques = response.data;
        setQuestionInfo(ques.questionList);
        // console.log(questionInfo);
        setChosenCategory(formData.category);
        setTotalQ(ques.totalQuestion);
        // console.log(totalQ);
        let maxMarks = 0;
        ques.questionList.forEach(question => {
            maxMarks += parseInt(question.marks);
        });
        setTotalMarks(maxMarks);
        navigate("/quiz");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(()=>{
    // console.log(totalMarks);
  },[totalMarks])

  return (
    <div className=' bg-[#2A1B3D] p-10 h-screen'> 
    <div className='text-center text-white text-6xl pt-7 font-abc pb-10'>Customize Your Quiz</div>
    <div className='flex'>
    <div className='border border-1 ml-[7rem] my-[2rem] p-10 rounded-lg  leading-relaxed w-[40rem]'>

    <form className=" my-0">
        <label htmlFor="category" className="block mb-2 text-2xl font-abc text-gray-900 dark:text-gray-300">Category</label>
        <select name="category" id="category" onChange={changeHandler} value={formData.category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value=""></option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        </form>

      

      <br />

      <form className=" my-0">
      <label htmlFor="difficulty" className="block mb-2 text-2xl font-abc text-gray-900 dark:text-gray-300">Difficulty</label>
      <select name="difficulty" id="difficulty" onChange={changeHandler} value={formData.difficulty} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      </form>

      <br />

      <div className='mb-0 '>
                            <div className='text-xl text-white mx-0'>Number of Questions :</div>
                            <input  className="my-[0.7rem] w-[35rem] h-10  bg-[#2a1b3d] border  border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="number" id='number' type="number"  onChange={changeHandler} value={formData.number}/>/{totalques}
                            
            </div>

      

      <br />
      <div className="py-[0rem] pl-[24.2rem]">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={submitHandler}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Begin Quiz
                                </span>

                                </button>
                                
                    </div>

      
    </div>
    <div className='w-[35rem] pl-[5rem] pt-[4.5rem]'><Lottie animationData={Join}/></div>
    </div>
    </div>
  );
}

export default QuestionParam;

