import styled from 'styled-components'
import { mobile } from 'utils/responsive'


export const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`

export const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({ height: "20vh" })}


`


export const Info = styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`


export const Title = styled.h1`
color:#FFF;
margin-bottom:20px;
font-weight:900;

`
export const Button = styled.button`
border:none;
background:#FFF;
padding:10px;
color:gray;
cursor:pointer;
font-weight:600;

`