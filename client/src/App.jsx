import './App.css';
import Home from './pages/home/Home';
import { Routes, Route} from "react-router-dom";
import Signup from './pages/login/Signup';
import LoginPage from './pages/login/Login';


import QuestionParam from './pages/questionParam/QuestionParam.jsx';
import Quiz from './pages/quizPage/Quiz.jsx';
import QuizResult from './pages/quizResult/QuizResult.jsx';
import QuestionPaper from './pages/questionPaper/QuestionPaper.jsx';
import CustomQuiz from './pages/customQuiz/CustomQuiz.jsx';
import Conductsession from './pages/conductSession/Conductsession.jsx';
import Addques from './pages/conductSession/Addques.jsx';
import Joinsession from './pages/joinSession/Joinsession.jsx';
import Aboutus from './pages/aboutUs/Aboutus.jsx';
import Sessionquiz from './pages/joinSession/Sessionquiz.jsx';
import Created from './pages/conductSession/Created.jsx';
import Dashboard from './pages/dashboard/Dashboard.jsx';
import Resultlist from './pages/dashboard/Resultlist.jsx';
import Sessionlist from './pages/dashboard/Sessionlist.jsx';

function App() {
 
  

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/questionParam"  element={<QuestionParam/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/quizResult" element={<QuizResult/>}/>
        <Route path="/questionPaper" element={<QuestionPaper/>}/>
        <Route path="/customquiz" element={<CustomQuiz/>}/>
        <Route path="/conductSession" element={<Conductsession/>}/>
        <Route path="/addQues" element={<Addques/>}/>
        <Route path ="/joinSession" element={<Joinsession/>}/>
        <Route path="/aboutUs" element={<Aboutus/>}/>
        <Route path="/sessionQuiz" element={<Sessionquiz/>}/>
        <Route path="/created" element={<Created/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/resultlist" element={<Resultlist/>}/>
        <Route path="/sessionlist" element={<Sessionlist/>}/>
        
      </Routes>
    </div>
  )
}

export default App