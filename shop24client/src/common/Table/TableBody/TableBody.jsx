import React from 'react'
import Grid from "@mui/material/Grid";
import MoreButton from 'common/MoreButton';
export default function TableBody({data}) {
    return (
        <Grid container >
            {data.map((el, index) => (
                <Grid item md key={index}>
                    {el.title}
                    {index == 2 && <button>ij</button>}

                </Grid>
            ))}
      </Grid>
    )
}
