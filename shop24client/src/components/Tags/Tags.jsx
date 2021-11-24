import React from "react";
import Grid from "@mui/material/Grid";
import { PaperWrapper } from "./styles";
import Input from "common/Input";
import { Button } from "@mui/material";
export default function Tags({ tags, handleChange, title,name }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: 10 }}
    >
      <Grid item md={8}>
        <PaperWrapper>
          {tags.length > 0
            ? tags.map((el, index) => (
                <Grid container key={index}>
                  <Grid item>
                    <Input value={el.title} name={name} onChange={(e)=>handleChange(e,index)}/>
                  </Grid>
                </Grid>
              ))
            : "No tags"}
            <Button>{title}</Button>
        </PaperWrapper>
      </Grid>
    </Grid>
  );
}
