import React from 'react'
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import {PaperWrapper} from './styles.js'
import Input from 'common/Input/Input.jsx';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function CreateProduct() {


    return (
        <Grid container spacing={2}>
            <Grid item md={8}>
                <PaperWrapper elevation={0}>
                    <Input variant="outlined" placeholder="Name"/>
                </PaperWrapper>
            </Grid>
            <Grid item md={4}>
                <PaperWrapper>
                    <Grid container spacing={1}>

                        <Grid item md={12}>
                            <FormControlLabel control={<Switch defaultChecked />} label="In Stock" />

                        </Grid>

                        <Grid item md={12}>
                            <Input variant="outlined" placeholder="Name" />

                        </Grid>

                        <Grid item md={12}>
                            <Input variant="outlined" placeholder="Description" multiline />

                        </Grid>
                    </Grid>

                </PaperWrapper>
            </Grid>
        </Grid>
    )
}
