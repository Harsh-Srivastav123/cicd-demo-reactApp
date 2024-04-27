import { createContext, useState } from "react"

export const CustomContext=createContext();
export const CustomContextProvider =({children})=>{
    const [questionInfo,setQuestionInfo]=useState([]);
    const [resultList,setResultList]=useState([]);
    const [result,setResult]=useState(null);
    const [totalQ,setTotalQ]=useState(0);
    const [chosenCategory,setChosenCategory]=useState("");
    const [totalMarks,setTotalMarks]=useState(0);

    let value={
        
        questionInfo,
        setQuestionInfo,
        totalQ,
        setTotalQ,
        chosenCategory,
        setChosenCategory,
        totalMarks,
        setTotalMarks,
        resultList,
        setResultList,
        result,
        setResult
    }
    return (
        <CustomContext.Provider value={value}>
            {children}
        </CustomContext.Provider>
    )

}