import styled from 'styled-components'
import Paper from '@mui/material/Paper';


export const PaperWrapper = styled(Paper)`

    background-color: rgb(255, 255, 255);
    color: rgb(33, 43, 54);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-image: none;
    overflow: hidden;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px;
    border-radius: 16px;

    position: relative;
    z-index: 0;
    padding: 24px;


`