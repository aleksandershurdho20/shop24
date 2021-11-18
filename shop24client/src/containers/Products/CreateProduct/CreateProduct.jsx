import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function CreateProduct() {
    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <Paper elevation={0}>
                    P
                </Paper>
            </Grid>
            <Grid item md={6}>
                3
            </Grid>
        </Grid>
    )
}
