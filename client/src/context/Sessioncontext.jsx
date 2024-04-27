import { createContext, useState } from "react"

export const SessionContext=createContext();
export const SessionContextProvider =({children})=>{
    const [sessionId, setSessionId]=useState(0);
    const [sessionTitle,setSessionTitle]=useState('');
    const [sessionQList,setSessionQList]=useState([]);
    const [result,setResult]=useState(null);
    const [sessionUserId, setSessionUserId]=useState('');
    const [dashboardData, setDashboardData]=useState('');
    const [date, setDate]= useState('');
    const [timeDuration, setTimeDuration] =useState('');

    let value={
        date, setDate, timeDuration, setTimeDuration, sessionId,setSessionId,sessionTitle,setSessionTitle,sessionQList,setSessionQList,result,setResult,dashboardData,setDashboardData, sessionUserId,setSessionUserId

    }

    return (
        <SessionContext.Provider value={value}>
            {children}
        </SessionContext.Provider>
    )
}