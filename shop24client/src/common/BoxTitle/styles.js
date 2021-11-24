import styled from 'styled-components'
import { Button } from '@mui/material'

export const BoxWrapper = styled.div`
    padding:1.25rem;
    border-radius:5px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:2rem;
    background: #FFF;
    box-shadow: rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px;

`

export const Title = styled.h1`
    font-weight:600;
    font-size:1.25rem;
    line-height: 1.75rem;



`

export const PrimaryButton = styled(Button)`
background:#038787;
color:#FFF;
transition:all ease-in  0.2s;
&:hover{
    background:#2fbbbb;
}

`