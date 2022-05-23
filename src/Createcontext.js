import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';


export const Createcontext = createContext();

export const Provider = (props) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://react-block-backend.herokuapp.com/api/v1/content")
        .then((req,res)=>{
            const up=req.data;

            setData(up)
        })
    },[])
    
 
    return (
        <Createcontext.Provider value={[data,setData]}>
            {props.children}
        </Createcontext.Provider>
    )
}