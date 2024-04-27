import  { useContext, useEffect, useState } from 'react'
import { baseUrl } from '../../baseUrl.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CustomContext } from '../../context/customQuizContext.jsx';
import Lottie from 'lottie-react'
import Custom from '../../animations/Custom.json'
import { AuthContext } from '../../context/authContext.jsx';

const CustomQuiz = () => {

    const [formData, setFormData] = useState({ category: "", easy: 0, medium:0, hard:0 });
    const [categories, setCategories] = useState([]);
    const [easyQuestion,setEasyQuestion]=useState(0);
    const [mediumQuestion,setMediumQuestion]=useState(0);
    const [hardQuestion,setHardQuestion]=useState(0);
    const [categoryList,setCategoryList]=useState([]);
    const [qList,setQList]=useState([]);
    const { setQuestionInfo , setTotalQ,setChosenCategory ,totalMarks,setTotalMarks} = useContext(CustomContext);
    const navigate = useNavigate();

    const {refreshToken}=useContext(AuthContext);
    useEffect(()=>{
        console.log("Refreshing token ")
        refreshToken();
    },[]);

    function updateQuestionCounts() {
        const selectedCategoryData = categoryList.find(categoryData => categoryData.category === formData.category);
    
        if (selectedCategoryData) {
            setEasyQuestion(selectedCategoryData.easyQuestion);
            setMediumQuestion(selectedCategoryData.mediumQuestion);
            setHardQuestion(selectedCategoryData.hardQuestion);
        } else {
            
            setEasyQuestion(0);
            setMediumQuestion(0);
            setHardQuestion(0);
        }
    } 
    useEffect(()=>{
        updateQuestionCounts();
     },)
    // [formData.category])
       

    useEffect(()=>{
        
        const fetchData = async () => {
            try {
              const response = await axios.get(`${baseUrl}/question/category/all`);
            //   console.log(response.data);
              const categoryData = response.data.map(item => item.category);
              setCategories(categoryData);
              setCategoryList(response.data);
              updateQuestionCounts();
            } catch (error) {
              console.log(error);
            }
          };
          fetchData();
          
    },);

    useEffect(()=>{
        // console.log(formData)
        //console.log(categoryList);
    },[formData.category,formData.easy,formData.medium,formData.hard,categoryList]);

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        //console.log(formData);
        updateQuestionCounts();
    }

    function addHandler(event){
        event.preventDefault();
        var newObj = {
            category:formData.category,
            easy:formData.easy,
            medium:formData.medium,
            hard:formData.hard
        };
        setQList(prevState => ([
            ...prevState, newObj
        ]));
        
        setFormData({
            category:"",
            easy:0,
            medium:0,
            hard:0
        });

    }
    useEffect(()=>{
        // console.log(qList);
    },[qList])

    function submitHandler(e){
        e.preventDefault();
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${baseUrl}/question/customQuiz`,
            headers: { 
              'Content-Type': 'application/json', 
              'X-API-Key': '{{token}}'
            },
            data : qList
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
        navigate("/quiz");
          
    }
    useEffect(()=>{
        // console.log(questionInfo);
        // console.log(chosenCategory);
        // console.log(totalQ);
        // console.log(totalMarks);
    },[totalMarks])

  return (
    <div className=' bg-[#2A1B3D] p-10 '>
       <div className='text-center text-white text-6xl pt-10 font-abc pb-10'>Customize Your Quiz</div>
       <div className='flex'>
       <div className='border border-1 ml-[7rem] my-[3rem] p-10 rounded-lg  leading-relaxed w-[40rem]'>
       

        
        <form className=" my-0">
        <label htmlFor="countries" className="block mb-2 text-2xl font-abc text-gray-900 dark:text-gray-300">Category</label>
        <select name="category" id="category" onChange={changeHandler} value={formData.category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value=""></option>
            {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
            ))}
        </select>
        </form>

        <br />
        <div> 

           
            <div className='mb-5 '>
                            <div className='text-xl text-white mx-0'>Number of Easy Questions :</div>
                            <input  className="my-[0.7rem] w-[35rem] h-10  bg-[#2a1b3d] border  border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="easy" id='easy' type="number"  onChange={changeHandler} value={formData.easy}/>/ {easyQuestion}
                            
            </div>

           

            <div className='mb-5 '>
                            <div className='text-xl text-white mx-0'>Number of Medium Questions :</div>
                            <input  className="my-[0.7rem] w-[35rem] h-10   bg-[#2a1b3d] border  border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="medium" id='medium' type="number"  onChange={changeHandler} value={formData.medium}/>/ {mediumQuestion}
                            
            </div>

          

            <div className='mb-5 '>
                            <div className='text-xl text-white mx-0'>Number of Hard Questions :</div>
                            <input  className="my-[0.7rem] w-[35rem] h-10  bg-[#2a1b3d] border  border-white text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5  dark:bg-[#2a1b3d] dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"name="hard" id='hard' type="number"  onChange={changeHandler} value={formData.number}/>/ {hardQuestion}
                            
            </div>

        </div>

        <div>
        <div className="py-[0rem] pl-[28rem]">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={addHandler}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Add
                                </span>

                                </button>
                                
                    </div>
           
        </div>
        <div>
           {qList.map((que,index) =>(
                <div key={index} className='text-2xl text-gray-300 '>
                    <p>Category : {que.category}</p>
                    <p>Easy : {que.easy}</p>
                    <p>Medium : {que.medium}</p>
                    <p>Hard : {que.hard}</p>
                    <br />
                </div>
           ))}
        </div>

        <div>
        <div className="py-[0.5rem] pl-[24.2rem]">
                                <button className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={submitHandler}>
                                <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-[#2A1B3D] rounded-md group-hover:bg-opacity-0">
                                Begin Quiz
                                </span>

                                </button>
                                
                    </div>
           
        </div>
      
    </div>
    <div className='w-[35rem] pl-[12rem] pt-10'><Lottie animationData={Custom}/></div>
    </div>
    </div>
  )
}

export default CustomQuiz
