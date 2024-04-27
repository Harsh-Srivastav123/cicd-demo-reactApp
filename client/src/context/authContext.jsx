import { createContext,  useEffect,useState } from "react";
import axios from "axios";
import {baseUrl} from "./../baseUrl.jsx"
export const AuthContext = createContext();


export const AuthContextProvider =({children})=>{
    
    const [uId,setId]=useState("");
    const [userCredential,setUserCredential]=useState({userName:"", email:"", password:""});
    const [userName,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const [message,setMessage]=useState("");
    const [accessToken,setAccessToken]=useState("");
   
    let access="";
    
    const refreshToken =()=>{
       
        console.log(userCredential)
        let data=JSON.stringify({
            "userName": `${userName}`,
            "email": `${email}`,
            "password":`${password}`
        });
        
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'/user/auth',
            headers: { 
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json', 
                'X-API-Key': '{{token}}'
            },
            data : data
        };
        

        try {
            axios.request(config)
            .then((response) => {
            
                access=response.data.token;
                setAccessToken(access);
            })
            .catch((error) => {
                console.log(error);
            })
            
        } catch (error) {
            console.log(error);
        }
        
    }
    const login =async(inputs) => {
        
        let data = JSON.stringify({
            "userName": `${inputs.userName}`,
            "email": `${inputs.email}`,
            "password":`${inputs.password}`
        });
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: baseUrl+'/user/auth',
            headers: { 
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json', 
                'X-API-Key': '{{token}}'
            },
            data : data
        };
        axios.request(config)
        .then((response) => {
            const { token } = response.data;
            
            setId(response.data.userId);
            access=response.data.token;
            setUsername(inputs.userName);
            setEmail(inputs.email);
            setPassword(inputs.password);
            setAccessToken(token);
            setUserCredential({
                userName: `${response.data.userName}`,
                email: `${inputs.email}`,
                password: `${inputs.password}`
            });

        })
        .catch((error) => {
            console.log("req error")
            console.log(error);
        });
        
        
    };
    
    
    useEffect(() => {
        
        // console.log(userCredential);
        // console.log(accessToken);
        // console.log(uId);
        // console.log(userName);
        // console.log(email);
        // console.log(password);
    }, [accessToken,userCredential, uId,userName,email,password]);
    

    let value = {
        login,
        message,
        setMessage,
        accessToken,
        setAccessToken,
        uId,
        setId,
        refreshToken,
        userCredential,
        setUserCredential,
        //sessionId,
        //setSessionId
    };
    
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};