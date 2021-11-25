import React from "react";
import Grid from "@mui/material/Grid";
import { PaperWrapper } from "./styles";
import Input from "common/Input";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Tags({ tags, handleChange, title,name,handleAddMore,handleRemove,handleSubmit,deleteFirstOne }) {
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
                     {deleteFirstOne && <IconButton aria-label="delete" size="large">
                        <DeleteIcon fontSize="inherit" onClick={()=>handleRemove(el._id,index)} />
                      </IconButton>}
                  </Grid>
                </Grid>
              ))
            : "No tags"}
            <Button onClick={handleAddMore}>Add more</Button>

            <Button onClick={handleSubmit}>{title}</Button>
        </PaperWrapper>
      </Grid>
    </Grid>
  );
}
