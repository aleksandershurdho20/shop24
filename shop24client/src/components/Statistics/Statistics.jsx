import React from "react";
import StatisticWidgets from "common/StatisticWidgets";
import Grid from "@mui/material/Grid";

export default function Statistics() {
  return (
    <Grid container spacing={2} style={{paddingLeft:15}} >
      <Grid item xs={4}>
        <StatisticWidgets
          color="#038787"
          background="#038787"
          backgroundSecondary="rgb(235, 250, 242)"
        />
      </Grid>
      <Grid item xs={4}>
        <StatisticWidgets
          color="rgb(254, 201, 15)"
          background="rgb(254, 201, 15)"
          backgroundSecondary="rgb(255, 244, 229)"
        />
      </Grid>
      <Grid item xs={4}>
        <StatisticWidgets
          color="rgb(26, 151, 245)"
          background="rgb(26, 151, 245)"
          backgroundSecondary="rgb(230, 244, 255)"
        />{" "}
      </Grid>
    </Grid>
  );
}
