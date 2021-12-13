import React,{useState,useEffect} from 'react'
import Grid from '@mui/material/Grid';
import ChatWidget from '../ChatWidget';
import { apiInstance } from 'utils/api';
import { useParams } from 'react-router-dom';

export default function ViewSupport() {
    const [messages,setMessages]=useState([])
    const { id } = useParams();
    useEffect(()=>{
        apiInstance.get('/messages/'+id).then(res => setMessages(res.data.messages)).catch(err => console.log({err}))
    },[id])
    console.log({messages})
    return (
        <Grid container spacing ={2}>

           <Grid item md={9}>
               Container
            </Grid> 
            <Grid item md={3}>
                <ChatWidget messages={messages}/>
            </Grid>
        </Grid>
    )
}
