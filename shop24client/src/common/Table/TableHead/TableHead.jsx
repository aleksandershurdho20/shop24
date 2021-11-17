import React from "react";
import Grid from "@mui/material/Grid";

export default function TableHead({ columns }) {
  return (
    <Grid container>
      {columns.map((el, index) => (
        <Grid item key={index}>
          {el.tilte}
        </Grid>
      ))}
    </Grid>
  );
}
