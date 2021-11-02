import styled from 'styled-components'
import { mobile } from 'utils/responsive'

export const Container = styled.div`
    height:60vh;
    background:#fcf5f5;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

`
export const Title = styled.h1`
    font-size:70px;
    margin-bottom:20px;
`
export const Description = styled.div`

    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
    ${mobile({ textAlign: "center" })}

`
export const InputContainer = styled.div`
    width:50%;
    height:40px;
    background:#FFF;
    display:flex;
    justify-content:space-between;
    border:1px solid #d3d3d3;
    ${mobile({ width: "80%" })}


`
export const Input = styled.input`
border:none;
outline:none;
flex:8;
padding-left:20px;
`
export const Button = styled.button`
flex:1;
background:teal;
color:#FFF;
border:none;
cursor:pointer;
&:hover{
    opacity:.6;
    transition:0.3s ease;
}
`