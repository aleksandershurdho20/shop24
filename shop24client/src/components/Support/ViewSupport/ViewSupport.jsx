import React from 'react'
import Grid from '@mui/material/Grid';
import ChatWidget from '../ChatWidget';
export default function ViewSupport() {
    return (
        <Grid container spacing ={2}>

           <Grid item md={9}>
               Container
            </Grid> 
            <Grid item md={3}>
                <ChatWidget/>
            </Grid>
        </Grid>
    )
}
