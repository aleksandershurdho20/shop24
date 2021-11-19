import styled from 'styled-components'
import TextField from '@mui/material/TextField';

export const TextInput = styled(TextField)`

.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
    border-radius: 8px;
 

}

.MuiOutlinedInput-notchedOutline{
    border-color: rgba(145, 158, 171, 0.32);
    outline:none;
   
}
.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline{
    border-color:#038787;
}
.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline{
    border-color:#038787;
}
.MuiOutlinedInput-root.Mui-disabled {
    color: blue;
    & > fieldset {
        border-color: orange
    }
}


`