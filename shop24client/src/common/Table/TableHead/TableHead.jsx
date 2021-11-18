import React from "react";
import Grid from "@mui/material/Grid";

export default function TableHead({ columns }) {
  return (
    <Grid container>
      {columns.map((el, index) => (
        <Grid item md key={index}>
          {el.title}
        </Grid>
      ))}
    </Grid>
  );
}
