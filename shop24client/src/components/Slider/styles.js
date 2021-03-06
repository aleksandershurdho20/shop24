import styled from 'styled-components'
import { mobile } from 'utils/responsive'

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
${mobile({ display: "none" })}


`

export const Arrow = styled.div`
width:50px;
height:50px;
background:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0; 
bottom:0;
left:${props => props.direction === 'left' && '10px'};
right:${props => props.direction === 'right' && '10px'};
cursor:pointer;
margin:auto;
opacity:.5;
z-index:2;
`

export const Wrapper = styled.div`
height:100%;
display:flex;
transform:translateX(${props => props.slideIndex * -100}vw);
transition:all 1.5s ease;
`
export const Slide = styled.div`
width:100vw;
display:flex;
align-items:center;
height:100vh;
background:#${props => props.bg}
`
export const ImgContainer = styled.div`
height:100%;
flex:1;

`
export const InfoContainer = styled.div`
flex:1;
padding:50px;

`

export const Image = styled.img`

height:80%;

`

export const Title = styled.h1`
font-size:70px;
`
export const Description = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px
`
export const Button = styled.button`
padding:10px;
font-size:20px;
background:transparent;
cursor:pointer;

`